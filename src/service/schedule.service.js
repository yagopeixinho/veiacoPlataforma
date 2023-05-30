import CoreApiService from "./core-api.service";
import ScheduleSerializer from "./serializers/schedule.serializer";

export default class ScheduleService extends CoreApiService {
  constructor() {
    super(undefined, "schedules", new ScheduleSerializer());
  }
}
