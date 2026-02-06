const leftSideSeeMoreLessBtnDivs = document.getElementById("leftSideSeeMoreLessDivs")
const seeLess = document.getElementById("seeLess")

function leftSideSeeMoreLessBtn() {
    // if (leftSideSeeMoreLessBtnDivs.style.display === "none") {
    //     leftSideSeeMoreLessBtnDivs.style.display = "block"

    //     seeLess.innerHTML =

    //         `
    //         <div id="user-profile" class="user-profile">
    //             <i class="fa-solid fa-angle-up"></i>
    //         </div>
    //         See less
    //     `
    // } else {
    //     leftSideSeeMoreLessBtnDivs.style.display = "none"

    //     seeLess.innerHTML = `
    //         <div id="user-profile" class="user-profile">
    //             <i class="fa-solid fa-angle-down"></i>
    //         </div>
    //         See more
    //     `
    // }



    const isHidden = window.getComputedStyle(leftSideSeeMoreLessDivs).display === "none";

    if (isHidden) {
        leftSideSeeMoreLessDivs.style.display = "block";
        seeLess.innerHTML = `
            <div class="user-profile">
                <i class="fa-solid fa-angle-up"></i>
            </div>
            See less
        `;
    } else {
        leftSideSeeMoreLessDivs.style.display = "none";
        seeLess.innerHTML = `
            <div class="user-profile">
                <i class="fa-solid fa-angle-down"></i>
            </div>
            See more
        `;

    }

}






const stories = [
    {
        fullName: "Emma Johnson",
        profilePic: "https://i.pravatar.cc/150?img=1",
        storyFile: "https://picsum.photos/400/700?random=1",
    },
    {
        fullName: "Liam Carter",
        profilePic: "https://i.pravatar.cc/150?img=2",
        storyFile: "https://picsum.photos/400/700?random=2",
    },
    {
        fullName: "Sophia Martinez",
        profilePic: "https://i.pravatar.cc/150?img=3",
        storyFile: "https://picsum.photos/400/700?random=3",
    },
    {
        fullName: "Noah Williams",
        profilePic: "https://i.pravatar.cc/150?img=4",
        storyFile: "https://picsum.photos/400/700?random=4",
    },
    {
        fullName: "Ava Brown",
        profilePic: "https://i.pravatar.cc/150?img=5",
        storyFile: "https://picsum.photos/400/700?random=5",
    },
    {
        fullName: "Olivia Anderson",
        profilePic: "https://i.pravatar.cc/150?img=6",
        storyFile: "https://picsum.photos/400/700?random=6",
    },
    {
        fullName: "Ethan Miller",
        profilePic: "https://i.pravatar.cc/150?img=7",
        storyFile: "https://picsum.photos/400/700?random=7",
    },
    {
        fullName: "Isabella Garcia",
        profilePic: "https://i.pravatar.cc/150?img=8",
        storyFile: "https://picsum.photos/400/700?random=8",
    },
    {
        fullName: "James Wilson",
        profilePic: "https://i.pravatar.cc/150?img=9",
        storyFile: "https://picsum.photos/400/700?random=9",
    },
    {
        fullName: "Mia Thompson",
        profilePic: "https://i.pravatar.cc/150?img=10",
        storyFile: "https://picsum.photos/400/700?random=10",
    },
    {
        fullName: "Benjamin Moore",
        profilePic: "https://i.pravatar.cc/150?img=11",
        storyFile: "https://picsum.photos/400/700?random=11",
    },
    {
        fullName: "Charlotte Taylor",
        profilePic: "https://i.pravatar.cc/150?img=12",
        storyFile: "https://picsum.photos/400/700?random=12",
    },
    {
        fullName: "Lucas Hernandez",
        profilePic: "https://i.pravatar.cc/150?img=13",
        storyFile: "https://picsum.photos/400/700?random=13",
    },
    {
        fullName: "Amelia Clark",
        profilePic: "https://i.pravatar.cc/150?img=14",
        storyFile: "https://picsum.photos/400/700?random=14",
    },
    {
        fullName: "Henry Lewis",
        profilePic: "https://i.pravatar.cc/150?img=15",
        storyFile: "https://picsum.photos/400/700?random=15",
    },
];

const storyContainer = document.getElementById("story-container");

const createStoryHTML = () => {
    for (let i = 0; i < stories.length; i++) {
        const story = stories[i];
        const storyHTML = ` <div class="story"
                            style="background-image: url(${story.storyFile});">

                            <div class="profile-pic">
                                <img src="${story.profilePic}"
                                    alt="">
                            </div>

                            <div class="story-content">
                                <p>${story.fullName}</p>
                            </div>
                        </div>`;

        storyContainer.innerHTML += storyHTML;
    }
};

createStoryHTML();

const posts = [
    {
        profileLogo: "https://i.pravatar.cc/150?img=1",
        profileName: "Ali Khan",
        date: "2 Feb 2026",
        caption: "life is beautiful ❤️",
        postImg: "https://picsum.photos/seed/post1/600/400",
        reactions: 120,
        comments: 15,
        shares: 5,
    },
    {
        profileLogo: "https://i.pravatar.cc/150?img=2",
        profileName: "Umer Farooq",
        date: "5 Feb 2026",
        caption: "coding mode on 💻",
        postImg: "https://picsum.photos/seed/post2/600/400",
        reactions: 340,
        comments: 22,
        shares: 10,
    },
    {
        profileLogo: "https://i.pravatar.cc/150?img=3",
        profileName: "Ayesha Malik",
        date: "10 Feb 2026",
        caption: "chai + code ☕",
        postImg: "https://picsum.photos/seed/post3/600/400",
        reactions: 210,
        comments: 30,
        shares: 12,
    },
    {
        profileLogo: "https://i.pravatar.cc/150?img=4",
        profileName: "Hassan Raza",
        date: "12 Feb 2026",
        caption: "simple vibes ✨",
        postImg: "https://picsum.photos/seed/post4/600/400",
        reactions: 150,
        comments: 18,
        shares: 7,
    },
    {
        profileLogo: "https://i.pravatar.cc/150?img=5",
        profileName: "Sara Ahmed",
        date: "15 Feb 2026",
        caption: "weekend mood 😎",
        postImg: "https://picsum.photos/seed/post5/600/400",
        reactions: 400,
        comments: 40,
        shares: 20,
    },
    {
        profileLogo: "https://i.pravatar.cc/150?img=6",
        profileName: "Bilal Qureshi",
        date: "16 Feb 2026",
        caption: "dream big 🌍",
        postImg: "https://picsum.photos/seed/post6/600/400",
        reactions: 290,
        comments: 25,
        shares: 15,
    },
    {
        profileLogo: "https://i.pravatar.cc/150?img=7",
        profileName: "Zain Abbas",
        date: "18 Feb 2026",
        caption: "hard work pays off 💪",
        postImg: "https://picsum.photos/seed/post7/600/400",
        reactions: 320,
        comments: 28,
        shares: 18,
    },
    {
        profileLogo: "https://i.pravatar.cc/150?img=8",
        profileName: "Hina Shah",
        date: "20 Feb 2026",
        caption: "learning js step by step 🚀",
        postImg: "https://picsum.photos/seed/post8/600/400",
        reactions: 180,
        comments: 12,
        shares: 8,
    },
    {
        profileLogo: "https://i.pravatar.cc/150?img=9",
        profileName: "Ali Raza",
        date: "22 Feb 2026",
        caption: "coffee & chill ☕😎",
        postImg: "https://picsum.photos/seed/post9/600/400",
        reactions: 260,
        comments: 20,
        shares: 9,
    },
    {
        profileLogo: "https://i.pravatar.cc/150?img=10",
        profileName: "Fatima Noor",
        date: "25 Feb 2026",
        caption: "sunshine vibes 🌞",
        postImg: "https://picsum.photos/seed/post10/600/400",
        reactions: 500,
        comments: 50,
        shares: 25,
    }
];

let postContainer = document.getElementById("feedPosts");

const postHtml = (post) => {
    return `<div id="feed-posts" class="feed-posts">
                    <div class="top-contant">
                        <div class="t-c-1">
                            <div class="t-c-1-left">
                                <div class="account-img">
                                    <img src=${post.profileLogo} alt="">
                                </div>

                                <div class="account-name">
                                    <div class="a-n-1">
                                        <p>${post.profileName}</p>
                                    </div>

                                    <div class="a-n-2">
                                        <p>${post.date}</p>
                                        <span></span>
                                        <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor"
                                            title="Shared with Public"
                                            class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                            style="--x-color:var(--secondary-icon)">
                                            <title>Shared with Public</title>
                                            <g fill-rule="evenodd" transform="translate(-448 -544)">
                                                <g>
                                                    <path
                                                        d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                                                        transform="translate(354 143.5)"></path>
                                                    <path
                                                        d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                                                        transform="translate(354 143.5)"></path>
                                                    <path fill-rule="nonzero"
                                                        d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                                                        transform="translate(354 143.5)"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="t-c-1-right">
                                <div class="svg-1">
                                    <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor"
                                        class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                        style="--x-color:var(--secondary-icon)">
                                        <g fill-rule="evenodd" transform="translate(-446 -350)">
                                            <path
                                                d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0">
                                            </path>
                                        </g>
                                    </svg>
                                </div>

                                <div class="svg-2">
                                    <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor"
                                        aria-hidden="true" class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                        style="--x-color:var(--secondary-icon)">
                                        <path
                                            d="M15.543 3.043a1 1 0 1 1 1.414 1.414L11.414 10l5.543 5.542a1 1 0 0 1-1.414 1.415L10 11.414l-5.543 5.543a1 1 0 0 1-1.414-1.415L8.586 10 3.043 4.457a1 1 0 1 1 1.414-1.414L10 8.586l5.543-5.543z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="t-c-2">
                            <p>${post.caption}</p>
                        </div>
                    </div>

                    <div class="feed-img">
                        <img src=${post.postImg} alt="">
                    </div>

                    <div class="bottom-contant">
                        <div class="likes-sec">
                            <div class="l-s-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                    <path
                                        d="M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z"
                                        fill="url(#paint0_linear_15251_63610)" />
                                    <path
                                        d="M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z"
                                        fill="url(#paint1_radial_15251_63610)" />
                                    <path
                                        d="M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z"
                                        fill="url(#paint2_radial_15251_63610)" fill-opacity=".5" />
                                    <path
                                        d="M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z"
                                        fill="#fff" />
                                    <defs>
                                        <radialGradient id="paint1_radial_15251_63610" cx="0" cy="0" r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="rotate(90 .0005 8) scale(7.99958)">
                                            <stop offset=".5618" stop-color="#0866FF" stop-opacity="0" />
                                            <stop offset="1" stop-color="#0866FF" stop-opacity=".1" />
                                        </radialGradient>
                                        <radialGradient id="paint2_radial_15251_63610" cx="0" cy="0" r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="rotate(45 -4.5257 10.9237) scale(10.1818)">
                                            <stop offset=".3143" stop-color="#02ADFC" />
                                            <stop offset="1" stop-color="#02ADFC" stop-opacity="0" />
                                        </radialGradient>
                                        <linearGradient id="paint0_linear_15251_63610" x1="2.3989" y1="2.3999"
                                            x2="13.5983" y2="13.5993" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#02ADFC" />
                                            <stop offset=".5" stop-color="#0866FF" />
                                            <stop offset="1" stop-color="#2B7EFF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                ${post.reactions}
                            </div>

                            <div class="l-s-2">
                                <p>${post.comments} comments</p>
                                <p>${post.shares} shares</p>
                            </div>
                        </div>

                        <div class="review-sec">
                            <div class="like">
                                <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1"
                                    style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v4/yZ/r/6IA92nEe6LR.png?_nc_eui2=AeGw0sGxP7SaclOmCk4ueWqSxHbXP_lsqWHEdtc_-WypYTzvo-x5DLCoj0cFmD5GZmdronT8pn1WJha6bS6exH6d&quot;); background-position: 0px -783px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>
                                Like
                            </div>

                            <div class="comment">
                                <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1"
                                    style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v4/yZ/r/6IA92nEe6LR.png?_nc_eui2=AeGw0sGxP7SaclOmCk4ueWqSxHbXP_lsqWHEdtc_-WypYTzvo-x5DLCoj0cFmD5GZmdronT8pn1WJha6bS6exH6d&quot;); background-position: 0px -741px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>
                                Comment
                            </div>

                            <div class="share">
                                <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1"
                                    style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v4/yZ/r/6IA92nEe6LR.png?_nc_eui2=AeGw0sGxP7SaclOmCk4ueWqSxHbXP_lsqWHEdtc_-WypYTzvo-x5DLCoj0cFmD5GZmdronT8pn1WJha6bS6exH6d&quot;); background-position: 0px -804px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>
                                Share
                            </div>
                        </div>
                    </div>
                </div>`
}

const createPostHTMLThroughMap = () => {
    postContainer.innerHTML = posts.map(post => postHtml(post)).join("");
}

createPostHTMLThroughMap(); 