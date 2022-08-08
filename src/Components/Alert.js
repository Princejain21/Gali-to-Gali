import React from 'react'

export default function Alert() {
  return (
    <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Thank you!</strong> Your Form has been submitted Successfully
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  )
}
