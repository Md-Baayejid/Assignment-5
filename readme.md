1 No. Question:-

document.getElementById("id"):
শুধু একটা element select করতে পারে, কারণ HTML-এ একটি id unique হয়।

document.getElementsByClassName("className"):
একাধিক element select করে, কারণ অনেক element-এর একই class থাকতে পারে।



document.querySelector("selector")
 এটা একটা DOM method যেটা CSS selector দিয়ে element খুঁজে বের করে।
 এটা সবসময় শুধু প্রথম matching element রিটার্ন করবে।

 document.querySelectorAll("selector")
 এটা CSS selector দিয়ে matching element গুলো খুঁজে বের করে।
 কিন্তু এগুলোকে একসাথে একটা static NodeList আকারে দেয় (array এর মতো, কিন্তু পুরোপুরি array না)।


2 No. Question:-

  <div id="container"></div>
  
 // 1. Create new insert
 
  const newTag = document.createElement("p");
  newTag.innerText = "Hello, I am a new paragraph!";
  document.getElementById("container").appendChild(newTag);


  3 No. Quistion:-

  Event bubbling মানে হলো event প্রথমে child element এ ঘটে → তারপর parent → তারপর grandparent… পর্যন্ত চলে যায়। event প্রথমে যেই child element এ ঘটলো, সেখান থেকে শুরু করে ধীরে ধীরে উপরের parent → তার parent → তার parent … এভাবে DOM tree এর উপরে propagate হতে থাকে।

  4 No. Quistion:-

  😔😔😔😔😔

  5 No Quistion:-

  😔😔😔😔😔
  
