import { StyleSheet } from 'react-native';
import * as defaultStyle from '../style';
import platformStyles from './platform-style';

const STYLESHEET_ID = 'stylesheet.agenda.main';

export default function styleConstructor(theme = {}) {
<<<<<<< HEAD
	const appStyle = { ...defaultStyle, ...theme };
	const { knob, weekdays } = platformStyles(appStyle);
	return StyleSheet.create({
		knob,
		weekdays,
		header: {
			overflow: 'hidden',
			justifyContent: 'flex-end',
			position: 'absolute',
			height: '100%',
			width: '100%',
		},
		calendar: {
			// not in use
			flex: 1,
			borderBottomWidth: 1,
			borderColor: appStyle.separatorColor,
		},
		knobContainer: {
			flex: 1,
			position: 'absolute',
			left: 0,
			right: 0,
			height: 24,
			bottom: 0,
			alignItems: 'center',
			backgroundColor: appStyle.calendarBackground,
		},
		weekday: {
			width: 32,
			textAlign: 'center',
			fontSize: 13,
			color: appStyle.textSectionTitleColor,
		},
		reservations: {
			flex: 1,
			backgroundColor: appStyle.backgroundColor,
		},
		...(theme[STYLESHEET_ID] || {}),
	});
=======
  const appStyle = {...defaultStyle, ...theme};
  const { knob, weekdays } = platformStyles(appStyle);
  return StyleSheet.create({
    knob,
    weekdays,
    header: {
      overflow: 'hidden',
      justifyContent: 'flex-end',
      position:'absolute',
      height:'100%',
      width:'100%',
    },
    calendar: { // not in use
      flex: 1,
      borderBottomWidth: 1,
      borderColor: appStyle.separatorColor
    },
    knobContainer: {
      flex: 1,
      position: 'absolute',
      left: 0,
      right: 0,
      height: 24,
      bottom: 0,
      alignItems: 'center',
      backgroundColor: appStyle.calendarBackground
    },
    weekday: {
      width: 32,
      textAlign: 'center',
      color: appStyle.textSectionTitleColor,
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      fontWeight: appStyle.textDayHeaderFontWeight
    },
    reservations: {
      flex: 1,
      marginTop: 104,
      backgroundColor: appStyle.backgroundColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
>>>>>>> baffa8b5f0259110c3688b55272b3de69d6df281
}
