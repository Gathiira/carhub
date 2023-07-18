# CAR HUB

Discover the best cars in the world

NOTE:

- Nextjs has a bug [updating search params resets scroll position](https://github.com/vercel/next.js/issues/49087).
  - soln. change the app to client side rendering - use useState and useEffect.
- I used default car image from [IMAGEIN STUDIO](https://www.imagin.studio/car-image-api) since their services are not free
  - I load the placeholder image on error from imagein studio car image url
  - soln. pay for imagein studio or get another free service.( still looking for one)
