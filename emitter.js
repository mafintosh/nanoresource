const { EventEmitter } = require('events')
const nanoresource = require('.')

const kNanoresource = Symbol('nanosignal.nanoresource')

class Nanoresource extends EventEmitter {
  constructor (opts = {}) {
    super()

    this[kNanoresource] = nanoresource({
      open: opts.open || this._open.bind(this),
      close: opts.close || this._close.bind(this),
      reopen: opts.reopen
    })
  }

  get opening () {
    return this[kNanoresource].opening
  }

  get opened () {
    return this[kNanoresource].opened
  }

  get closing () {
    return this[kNanoresource].closing
  }

  get closed () {
    return this[kNanoresource].closed
  }

  get actives () {
    return this[kNanoresource].actives
  }

  open (cb) {
    this[kNanoresource].open(cb)
  }

  close (allowActive, cb) {
    this[kNanoresource].close(allowActive, cb)
  }

  active (cb) {
    return this[kNanoresource].active(cb)
  }

  inactive (cb, err, val) {
    this[kNanoresource].inactive(cb, err, val)
  }

  _open (cb) {
    cb(null)
  }

  _close (cb) {
    cb(null)
  }
}

module.exports = (opts) => new Nanoresource(opts)
module.exports.Nanoresource = Nanoresource
