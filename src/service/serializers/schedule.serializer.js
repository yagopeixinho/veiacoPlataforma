export default class ScheduleSerializer {
  fromJson(json) {
    const scheduleFromJson = {};

    Object.assign(
      scheduleFromJson,
      json.id && {
        Id: json.id,
      },
      json.start_time && {
        StartTime: new Date(json.start_time),
      },
      json.end_time && {
        EndTime: new Date(json.end_time),
      },
      json.subject && {
        Subject: json.subject,
      }
    );

    return scheduleFromJson;
  }

  toJson(user) {
    const userToJson = {};

    Object.assign(
      userToJson,
      user.name && { name: user.name },
      user.email && { email: user.email },
      user.password && { password: user.password }
    );

    return userToJson;
  }
}
