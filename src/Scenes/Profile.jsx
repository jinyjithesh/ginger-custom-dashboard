import React from 'react'

const Profile = () => {
   
    
   
  return (
    <div class=".card-profile">
        <div class="card_background_img"></div>
        <div class="card_profile_img"></div>
        <div class="user_details">
            <h3>Gordon Ramsay</h3>
            <p>Master Chef
                
            </p>
        </div>
        <div class="card_count">
            {/* <div class="count">
                <div class="fans">
                    <h3>2.4M</h3>
                    <p>Fans</p>
                </div>
                <div class="following">
                    <h3>202</h3>
                    <p>Followings</p>
                </div>
                <div class="post">
                    <h3>552</h3>
                    <p>Posts</p>
                </div>
            </div> */}
             <div class="btn">Add</div>
        </div>
    </div>
  )
}

export default Profile