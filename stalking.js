/* INSTRUCTIONS

Use Google Chrome on a laptop.
Go to Vietcode's Facebook page. Find a post.

Click the '3 dot' button at the top right of the post,
then click 'Show in tab'.
On the tab, click the 'gear' button, then click 'See full post'.

Next, on the address bar, change 'www' to 'm' and hit Enter.

Scroll to the bottom of the page (now in mobile version),
click 'View more comments...'.
Do this repeatedly until it no longer shows more comments.

Then display the console and run this script.
*/

const members = ['Hoàng Xuân Việt', 'Nguyễn Minh Đức', 'Nguyễn Mạnh Hùng', 'Đức Minh'];

const replies = document.getElementsByClassName('_4ayk')
for (let i=0; i<replies.length; i++) {
    replies[i].click();
}

const comments = document.getElementsByClassName('_2b05');

for (let i=0; i<members.length; i++) {
    for (let j=0; j<comments.length; j++) {
        if (comments[j].textContent == members[i]) {
            console.log(members[i]); // number of comments by each member will be logged in console
        }
    }
}