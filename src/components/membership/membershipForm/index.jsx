import React from 'react'
import { MembershipFormWrapper } from './style'
import MailIcon from "../../../assets/svg/mail.svg"

// burayı belki mui dan alırsın ( form için de formik kullan)
function MembershipForm() {
    return (
        <MembershipFormWrapper>
            <div className='formContainer'>
                <form action="#">
                    <div className='formQuestions'>
                        <input type="mail" placeholder='begum@begum.com' id='email'/>
                        <div className='imageContainer'>
                            <img src={MailIcon} alt="mail-icon" />
                        </div>
                        <div className='emailLabel'>
                            E-Posta Adresiniz
                        </div>
                        <button type='submit'>Gönder</button>
                        <br />
                        <input type="checkbox" id="allowComminication" name="allowComminication" />
                        <label htmlFor="allowComminication">
                            %50’ye varan Fırsat ve Kampanyalardan haberdar olmak istiyorum
                        </label>
                    </div>
                </form>
            </div>
        </MembershipFormWrapper>
    )
}

export default MembershipForm