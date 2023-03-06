import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Button, Icon, Overlay} from 'react-native-elements';
import Header from '../../components/Header';
import {
  DARK_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
} from '../../utils/constants';
import styles from './styles';

const RenderItem = ({item, today, activeDate, openEvent}) => {
  if (item == -1) {
    return <View style={[styles.container_day, {borderColor: THIRD_COLOR}]} />;
  } else {
    return (
      <TouchableOpacity
        style={styles.container_day}
        onPress={() => {
          item?.events && openEvent(item?.events);
        }}>
        <View style={styles.infoDayContent}>
          <Text style={styles.text_day}>{item.day}</Text>
          {item?.events && (
            <Icon
              name="info"
              color={PRIMARY_COLOR}
              size={16}
              iconStyle={{marginRight: 3}}
            />
          )}
        </View>
        {item.day == today.getDate() &&
          activeDate.getMonth() == today.getMonth() &&
          activeDate.getFullYear() == today.getFullYear() && (
            <View style={styles.today}>
              <Text style={styles.text_today}>Hoy</Text>
            </View>
          )}
      </TouchableOpacity>
    );
  }
};

const Calendar = ({
  activeDate,
  goBackToday,
  goBack,
  matrix,
  months,
  onChangeMonth,
  weekDays,
  openEvent,
}) => {
  const renderBody = () => {
    return (
      <View style={styles.container_body}>
        {matrix.map((item, index) => {
          if (index == 0) {
            return <View key={index}>{renderHeaderRow()}</View>;
          } else {
            return renderRow({item, index});
          }
        })}
      </View>
    );
  };
  const renderHeaderRow = () => {
    return (
      <View style={[styles.rowEvenly, styles.around]}>
        {weekDays.map((item, index) => (
          <View key={index}>
            <Text style={styles.text_week}>{item}</Text>
          </View>
        ))}
      </View>
    );
  };
  const renderRow = ({item, index}) => {
    return (
      <View key={index} style={styles.rowEvenly}>
        {item.map((item, index) => (
          <RenderItem
            item={item}
            key={index}
            today={new Date()}
            activeDate={activeDate}
            openEvent={openEvent}
          />
        ))}
      </View>
    );
  };
  return (
    <>
      <Header />
      <View style={{flex: 1}}>
        <View style={styles.headerPageContainer}>
          <Text style={styles.headerPageTitle}>Turnos</Text>
          <Button
            title="Volver"
            titleStyle={styles.titleBtn}
            type="clear"
            onPress={goBack}
            icon={{name: 'arrow-left', color: DARK_COLOR, size: 24}}
          />
        </View>
        <ScrollView style={{flex: 1, padding: 5, marginTop: 10}}>
          <View style={styles.control_month_container}>
            <Button
              type="clear"
              onPress={() => onChangeMonth(-1)}
              icon={
                <Icon
                  name="chevron-left"
                  type="font-awesome"
                  color={SECONDARY_COLOR}
                  size={24}
                />
              }
            />
            <Text style={styles.control_month_text}>
              {months[activeDate.getMonth()] + ' ' + activeDate.getFullYear()}
            </Text>
            <Button
              type="clear"
              onPress={() => onChangeMonth(1)}
              icon={
                <Icon
                  name="chevron-right"
                  type="font-awesome"
                  color={SECONDARY_COLOR}
                  size={24}
                />
              }
            />
          </View>
          <View style={styles.container_calendar}>{renderBody()}</View>
          <View styles={styles.toolsContainer}>
            <Button
              title="Hoy"
              titleStyle={styles.titleBtn}
              type="clear"
              onPress={goBackToday}
              icon={{
                name: 'calendar-alt',
                type: 'font-awesome-5',
                color: DARK_COLOR,
                size: 24,
              }}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Calendar;
