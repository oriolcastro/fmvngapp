import localforage from 'localforage'

localforage.config({
  driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
})

export const addEventToDb = data => {
  return localforage
    .setItem(data.id, data)
    .then(function(value) {
      console.log('Event added')
    })
    .catch(function(err) {
      console.log(err)
    })
}

export const deleteEventFromDb = data => {
  return localforage
    .removeItem(data)
    .then(function() {
      console.log('Event is removed from favs')
    })
    .catch(function(err) {
      console.log(err)
    })
}

export const getAllEventsFromDb = () => {
  return localforage
    .keys()
    .then(keys => Promise.all(keys.map(k => localforage.getItem(k))))
}

export const isEventFav = data => {
  localforage.getItem(data, function(err, value) {
    console.log(value)
    console.log(err)
    return value
  })
}
