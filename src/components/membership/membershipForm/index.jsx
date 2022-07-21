import React from 'react'
import { MembershipFormWrapper } from './style'

// burayı belki mui dan alırsın ( form için de formik kullan)
function MembershipForm() {
    return (
        <MembershipFormWrapper>
            <div className='formContainer'>
                <form action="#">
                    <div className='formQuestions'>
                        <input type="mail" placeholder='begum@begum.com' />
                        <input type="checkbox" id="allowComminication" name="allowComminication" />
                        <label htmlFor="allowComminication">
                            %50’ye varan Fırsat ve Kampanyalardan haberdar olmak istiyorum
                        </label>
                    </div>
                    <button type='submit'>Gönder</button>
                </form>
            </div>
        </MembershipFormWrapper>
    )
}

export default MembershipForm