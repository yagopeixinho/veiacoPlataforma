import { toDateISO } from "../../utils/formatDate";

export default class ScheduleSerializer {
  fromJson(json) {
    // debugger;
    const scheduleFromJson = {};

    Object.assign(
      scheduleFromJson,
      json.id && {
        Id: json.id,
      },
      json.veiaco_id && {
        VeiacoId: json.veiaco_id
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

  toJson(schedule) {
    debugger;
    const scheduleToJson = {};

    Object.assign(
      scheduleToJson,
      schedule.subject && { subject: schedule.subject },
      schedule.startTime && { start_time: toDateISO(schedule.startTime) },
      schedule.endTime && { end_time: toDateISO(schedule.endTime) },
      schedule.veiacoId && { veiaco_id: schedule.veiacoId },
      schedule.userId && { user_id: schedule.userId }
    );

    return scheduleToJson;
  }
}
