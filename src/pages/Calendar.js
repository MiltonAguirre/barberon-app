import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Calendar from '../containers/Calendar';
import InfoDayModal from '../components/InfoDay';
const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];
const weekDays = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const CalendarScreen = props => {
  const [activeDate, setActiveDate] = useState(new Date());
  const [matrix, setMatrix] = useState([]);
  const [showDay, setShowDay] = useState(false);
  const [infoDay, setInfoDay] = useState(null);
  const [reloadMatrix, setReloadMatrix] = useState(false);
  const openEvent = infoDays => {
    setInfoDay(infoDays);
    setShowDay(true);
  };
  //   const apiGetMyFarm = async () => {
  //     const {setLoading, setSuccess, token, setUserPlants} = props;
  //     setLoading();
  //     const internet = await checkInternetConection();
  //     if (!internet) {
  //       setError('Verifica tu conexión a internet');
  //       setTrySubmit(!trySubmit);
  //     } else {
  //       try {
  //         const response = await getMyFarm(token);
  //         if (response.status == 200) {
  //           if (response.data?.errors) {
  //             setError('Verifica tus credenciales y vuelve a intentarlo');
  //           } else if (response.data?.data) {
  //             setSuccess();
  //             setUserPlants(response.data.data);
  //             return response.data.data;
  //           }
  //         }
  //       } catch (error) {
  //         console.log('CATCH ERROR: ', error);
  //         setError(error);
  //       } finally {
  //         setReloadMatrix(!reloadMatrix);
  //       }
  //     }
  //   };
  const getEventsDates = () => {
    // const {myPlants} = props;
    // const events = myPlants.map(plant => {
    //   const {actions, stages, id} = plant;
    //   const stage_dates = stages.map(stage => {
    //     const {created_at, name} = stage;
    //     const date = new Date(created_at);
    //     if (date.getMonth() === activeDate.getMonth()) {
    //       return {
    //         title: name,
    //         date,
    //         plant,
    //       };
    //     }
    //   });
    //   const action_dates = actions.map(action => {
    //     const {created_at, name} = action;
    //     const date = new Date(created_at);
    //     if (date.getMonth() === activeDate.getMonth()) {
    //       return {
    //         title: name,
    //         date,
    //         plant,
    //       };
    //     }
    //   });
    //   return [...stage_dates, ...action_dates];
    // });
    // return events;
    return [];
  };
  const generateMatrix = () => {
    const events = getEventsDates();
    const matrix = [];
    matrix[0] = weekDays;
    const year = activeDate.getFullYear();
    const month = activeDate.getMonth();
    const firstDay = new Date(year, month, 1);
    let maxDays = nDays[month];
    if (month == 1) {
      // February
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        maxDays += 1;
      }
    }
    let counter = 1;
    for (let row = 1; row < 7; row++) {
      matrix[row] = [];
      for (let col = 0; col < 7; col++) {
        matrix[row][col] = -1;
        if (row == 1 && col >= firstDay.getDay()) {
          const todayEvents = [];
          events.forEach(plantEvents => {
            plantEvents.forEach(element => {
              if (
                element?.date.getDate() == counter &&
                element?.date.getMonth() == activeDate.getMonth()
              ) {
                todayEvents.push(element);
              }
            });
          });

          if (todayEvents && todayEvents.length > 0) {
            matrix[row][col] = {
              day: counter,
              events: todayEvents,
            };
          } else {
            matrix[row][col] = {day: counter};
          }

          counter++;
        } else if (row > 1 && counter <= maxDays) {
          const todayEvents = [];
          events.forEach(plantEvents => {
            plantEvents.forEach(element => {
              if (
                element?.date.getDate() == counter &&
                element?.date.getMonth() == activeDate.getMonth()
              ) {
                todayEvents.push(element);
              }
            });
          });

          if (todayEvents && todayEvents.length > 0) {
            matrix[row][col] = {
              day: counter,
              events: todayEvents,
            };
          } else {
            matrix[row][col] = {day: counter};
          }
          counter++;
        }
      }
    }
    return matrix;
  };
  const onChangeMonth = value => {
    const newDate = new Date(
      activeDate.getFullYear(),
      activeDate.getMonth(),
      1,
    );
    newDate.setMonth(newDate.getMonth() + value);
    setActiveDate(newDate);
  };
  const goBackToday = () => {
    setActiveDate(new Date());
  };
  const goBack = () => {
    props.navigation.goBack();
  };
  useEffect(() => {
    const matrix = generateMatrix();
    setMatrix(matrix);
  }, [activeDate, reloadMatrix]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flex: 1}}>
        {showDay ? (
          <InfoDayModal items={infoDay} close={() => setShowDay(false)} />
        ) : (
          <Calendar
            matrix={matrix}
            weekDays={weekDays}
            months={months}
            activeDate={activeDate}
            onChangeMonth={onChangeMonth}
            goBackToday={goBackToday}
            goBack={goBack}
            openEvent={openEvent}
          />
        )}
      </View>
    </View>
  );
};

export default CalendarScreen;
