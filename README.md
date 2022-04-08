

# Youtube clone app  
DEMO  👉🏼  : https://youtube-ms.netlify.app

<table align="center">
  <tr>
    <td> <img width="600" alt="image" src="https://user-images.githubusercontent.com/71766604/162486005-84a7c3d3-19f4-4ed4-bbe6-ee3f35d230f5.png"></td>

  </tr>
  <tr>
    <td><img width=600" alt="image" src="https://user-images.githubusercontent.com/71766604/162485181-083d721b-0452-4f85-96a5-27d7cc72fdc4.png">
</td>
  
  </tr>
</table>


## 🔍 README
- Youtube clone app
- Get most popular video when window loaded.
- User can search video by keyword

## 💪 Tech stacks 
- React.js
- JavaScript
- postCSS
- Deploy with netlify.

### 💻 Library
- moment js https://momentjs.com/
 > In order to show ordered uploaded time 

### 📈 Google Youtube API 
- Youtube player https://developers.google.com/youtube/youtube_player_demo
- YouTube Data API https://developers.google.com/youtube/v3/getting-started

## Extra features
### 📲 Responsive design
     
<table align="center">
  <tr>
    <td><img width="559" alt="image" src="https://user-images.githubusercontent.com/71766604/162509673-12d37ce6-f06e-43ee-9a1a-110b42875742.png"></td>
         <td><img width="552" alt="image" src="https://user-images.githubusercontent.com/71766604/162509853-7c464b41-8ac5-47bf-9fbe-1291b5b717be.png"></td>
  </tr>

</table>
     
### 📦 Set Youtube network module aside as class
## why?
     - In order to keep MVC principal, remove network logic in React component.
     - Dependency injection
       (To avoid unnecessary networking while taking a unit test, later on, inject mock class when its need test)
     
     
- youtube.js     
<img width="1068" alt="image" src="https://user-images.githubusercontent.com/71766604/162510080-d93063e5-8819-419c-85d4-28edc2d9fba6.png">

- index.js : create instance, and delivered props to app component
<img width="589" alt="image" src="https://user-images.githubusercontent.com/71766604/162510127-ae29faab-b97e-469c-87aa-c5722a4159ea.png">
     
- get props in app.jsx component.
<img width="604" alt="image" src="https://user-images.githubusercontent.com/71766604/162510184-9a47afed-15c9-451b-8593-52f152bc3631.png">

     
## Future improvement plan 📝
- fetch API by using Axios library
- Polish front-end


## License
This project is licensed under the MIT License.
