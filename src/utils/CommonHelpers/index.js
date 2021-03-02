import _ from 'lodash';
import {Linking} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {useEffect, useRef} from 'react';
import {appTheme} from '~/utils/Themes/appTheme';
import {Platform} from 'react-native';
import {JobStatus, TripStatus} from '~/app/constants';
import moment from 'moment';

export const showErrorMessage = (message) => {
  showMessage({
    message: message,
    type: 'danger',
  });
};

export const showSuccessMessage = (message) => {
  showMessage({
    message: message,
    type: 'success',
  });
};

export const showWarningMessage = (message) => {
  showMessage({
    message: message,
    type: 'warning',
  });
};

export const renderItemKey = (item, index) => index + '';

export const openLink = (link) => {
  if (!link) return;
  Linking.canOpenURL(link).then(
    (supported) => {
      supported && Linking.openURL(link);
    },
    (error) => {
      showErrorMessage(error);
    },
  );
};

export const makePhoneCall = (phoneNumber) => {
  if (!phoneNumber) return;
  let link = phoneNumber;
  if (Platform.OS !== 'android') {
    link = `telprompt:${phoneNumber}`;
  } else {
    link = `tel:${phoneNumber}`;
  }
  Linking.canOpenURL(link).then(
    (supported) => {
      supported && Linking.openURL(link);
    },
    (error) => {
      showErrorMessage(error);
    },
  );
};

export const openMap = ({latitude, longitude, label}) => {
  const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
  const location = `${latitude},${longitude}`;
  const url = Platform.select({
    ios: `${scheme}${label}@${location}`,
    android: `${scheme}${location}(${label})`,
  });
  openLink(url);
};

export const indexOf = (arr, obj) => {
  let index = arr.length;
  while (index--) {
    if (arr[index].id === obj.id) {
      return index;
    }
  }
  return -1;
};

export const standardMessages = (messages, users) => {
  let newList = [];
  if (_.isArray(messages) && _.isArray(users)) {
    messages.forEach((item) => {
      const user = users.find((user) => user.user_id == item.user_id);

      const newItem = {
        _id: item.id,
        createdAt: item.created_at,
        text: item.body,
        isRead: false,
        user: {
          _id: item.user_id,
          avatar: user?.avatar,
          name: user?.name,
        },
      };
      newList.push(newItem);
    });
  }

  return newList;
  //return newList.reverse()
};

export const getStatusColor = (status) => {
  if (status === 'running') {
    return appTheme().statusRunning;
  } else if (status === 'completed') {
    return appTheme().statusCompleted;
  } else if (status === 'pending') {
    return appTheme().statusPending;
  } else if (
    status === JobStatus.paused ||
    status == JobStatus.cancelled ||
    status == JobStatus.incomplete
  ) {
    return appTheme().statusPause;
  }

  return 'white';
};

export const getJobBackgroundColor = (state) => {
  if (state === JobStatus.cancelled || state === JobStatus.completed) {
    return '#ffd1f7';
  } else if (state === JobStatus.pending) {
    return '#c6e8f7';
  }
  return '#e5e5e5';
};

export const openGoogleMap = (address) => {
  const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
  const latLng = `${address.latitude},${address.longitude}`;
  const label = address.address_line1;
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });

  Linking.openURL(url);
};

export async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

export function ETAsDisplay(job) {
  const state = job.state;
  var result = '';
  const eta_at = job && job.eta_at;
  const service_run = job && job.service_run;
  if (state === JobStatus.cancelled) {
    const cancelled_at = job.cancelled_at ? job.cancelled_at : '';
    result = moment(cancelled_at).format('hh:mm A');
  } else if (state === JobStatus.incomplete) {
    const incompleted_at = job.incompleted_at ? job.incompleted_at : '';
    result = moment(incompleted_at).format('hh:mm A');
  } else if (state === JobStatus.running) {
    const started_at = job.started_at ? job.started_at : '';
    result = moment(started_at).format('hh:mm A');
  } else if (state === JobStatus.completed) {
    const started_at = job && job.started_at;
    const completed_at = job && job.completed_at;
    if (started_at) {
      const timeStart = moment(started_at).format('hh:mm A');
      const timeEnd = moment(completed_at).format('hh:mm A');
      result = `${timeStart} - ${timeEnd}`;
    } else {
      result = moment(completed_at).format('hh:mm A');
    }
  } else if (eta_at) {
    result = moment(eta_at).format('hh:mm A');
  } else if (
    (service_run && service_run.state === TripStatus.pending) ||
    !eta_at
  ) {
    const checkpoint = job.checkpoint;
    const relative_eta_in_minutes = checkpoint.relative_eta_in_minutes
      ? checkpoint.relative_eta_in_minutes
      : undefined;

    if (checkpoint && relative_eta_in_minutes) {
      result = `${job.relative_eta_in_minutes - relative_eta_in_minutes} min`;
    } else {
      result = `${job.relative_eta_in_minutes} min`;
    }
  }

  return result;
}

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
