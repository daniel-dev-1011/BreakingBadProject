export const storeKey = {
  currentUser: "currentUser",
  token: "authenticationToken",
  auths: "authens",
  modeTheme: "modeTheme",
  DB_STORED_GEOFENCE_KEY:'storedGeofences',
  DB_STORED_GEOFENCE_EVENT_PREFIX: 'storedGeofenceEvent:',
  RUNNING_TRIP: "RUNNING_TRIP",
  APP_SETTINGS: 'app_settings'
}

export const baseURLSocket = "http://192.168.1.101:4000"

export const HOME_PARAMS = {
  limit: 20,
  offset: 0
}

export const PERSIST_PARAMS = {
  comments: "comments"
}

export const TripStatus = {
  pending: "pending",
  running: "running",
  paused: "paused",
  completed: "completed",
  cancelled: "cancelled",
}

export const JobStatus = {
  pending: "pending",
  running: "running",
  paused: "paused",
  completed: "completed",
  cancelled: "cancelled",
  incomplete: "incomplete",
  checkin: "checkin",
  checkout: "checkout",
}

export const GeoAssist = {
  none: "nogeo",
  minimum: "mingeo",
  always: "maxgeo",
}

export const TrackingStrategy = {
  optional: "optional",
  checkout: "checkout",
  required: "required",
}

export const TripSettingType = {
  state: "state",
  tracking_strategy:'tracking_strategy'
}

export const defaultSettings = {
  geoModal: GeoAssist.minimum,
  geoRadius: 80,
  trackingStrategy: TrackingStrategy.optional,
}

export const MAX_ITEM_PAGE = 15
export const LIMIT_TRIPS = 10