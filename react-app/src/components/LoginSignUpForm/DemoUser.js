import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { demoLogin } from "../../store/session";

const DemoUser = ({setShowModal}) => {
	let history = useHistory()
	const dispatch = useDispatch()

    const demoLoginWrapper = async (e) => {
        e.preventDefault()
        await dispatch(demoLogin())
        history.push('/savedItems')
        setShowModal(false)
    }

    //doesn't have to be a form could be a link, but not a link instead of a form
    return (
        <>
            <form onSubmit={demoLoginWrapper} >
                <div >
                    <input className="demo-link" type="submit" value="Demo"/> 
                </div>
            </form>
        </>
	)
}

export default DemoUser
