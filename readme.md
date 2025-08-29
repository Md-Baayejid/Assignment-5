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
