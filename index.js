//1.
const bucketList = document.querySelector(".list");
console.log(bucketList);
const newBucketMember1 = document.createElement("p");
newBucketMember1.innerText = "Learn JavaScript";
bucketList.appendChild(newBucketMember1);

//2:
console.log(bucketList);
const newBucketMember2 = document.createElement("p");
newBucketMember2.innerText = "Become a Pensioner";
bucketList.insertAdjacentElement("beforeend", newBucketMember2);

//3.
console.log(bucketList.innerHTML);

//4.
const newBucketMember4 = "<p>Learn CSS</p>";
//5.
//bucketList.innerHTML = newBucketMember4;

//6.
bucketList.insertAdjacentHTML("afterbegin", newBucketMember4);

//7.
const buckmems = ["Iron Man", "Vasaloppet", "Bungy Jump"];
for (let bm of buckmems) {
    bucketList.insertAdjacentHTML("beforeend", `<p>${bm}</p>`);
}

//8.
console.log("# Bucket list entries: " + bucketList.children.length);

//9.
const owner = document.querySelector(".owner");
owner.innerText = "Lennart's";

//10.
const newBucketMember10 = document.createElement("p");
newBucketMember10.innerText = "Understand the DOM";
bucketList.replaceChild(newBucketMember10, bucketList.firstElementChild);

//11.
const newBucketMember11 = document.createElement("p");
newBucketMember11.innerText = "Learn HTML";
const middleIndex = Math.floor(bucketList.children.length / 2);
bucketList.replaceChild(newBucketMember11, bucketList.children[middleIndex]);

//12.
bucketList.removeChild(bucketList.lastElementChild);