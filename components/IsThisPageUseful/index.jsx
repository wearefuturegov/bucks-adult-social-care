import React from 'react'
import './style.scss'

export default () =>
    <section className="useful-page">
        <div className="container">
            <div className="useful-page__inner two-thirds">
                <p>Was this page useful?</p>
                <div className="useful-page__buttons">
                    <button className="useful-page__button">Yes</button>
                    <button className="useful-page__button">No</button>
                </div>
            </div>
        </div>
    </section>