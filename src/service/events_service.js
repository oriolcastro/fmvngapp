import { BaseService } from './base_service'

export class EventsService extends BaseService {
  constructor() {
    super()
    this.tabelName = 'events'
  }

  getEvents() {
    return this.connection.select({
      from: this.tabelName,
    })
  }

  addEvent(event) {
    return this.connection.insert({
      into: this.tabelName,
      values: [event],
      return: true,
    })
  }

  getEventById(id) {
    return this.connection.select({
      from: this.tabelName,
      where: {
        id: id,
      },
    })
  }

  removeEvent(apiid) {
    return this.connection.remove({
      from: this.tabelName,
      where: {
        apiid: apiid,
      },
    })
  }

  updateEventsById(id, updateData) {
    return this.connection.update({
      in: this.tabelName,
      set: updateData,
      where: {
        id: id,
      },
    })
  }
}
