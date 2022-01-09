import React from 'react'
import Header from './Header'
import Section from './Section'
import Footer from './Footer'
import Info from './Info'

function Todo() {
    return (
        <div>
            <section class="todoapp">
                <Header/>
                <Section/>
                <Footer/>
            </section>    
            <Info/>
        </div>
    )
}

export default Todo
