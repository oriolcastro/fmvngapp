export class Event {
  id
  apiid
  title
  time
  day
  info

  constructor(id, apiid, title, time, day, info) {
    this.id = id == null ? 0 : id
    this.apiid = apiid == null ? '' : apiid
    this.title = title == null ? '' : title
    this.time = time == null ? '' : time
    this.day = day == null ? '' : day
    this.info = info == null ? '' : info
  }
}
