import React from 'react'
import EmailPassword from './../../components/EmailPassword'
import MetaDecorator from '../../Utils/MetaDecorator'

const recoveryResume = require('./../../pagesResume/recoverypage.json')
// eslint-disable-next-line
const Recovery = (props) => {
  return (
    <section className="recovery">
      <MetaDecorator
        title={recoveryResume.pageTitle}
        description={recoveryResume.pageDescription}
      />
      <EmailPassword />
    </section>
  )
}
export default Recovery
