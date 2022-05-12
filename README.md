# Planning

## Questions:

- Should responses created be related to the profile feed of the user receiving mentions?
- Should responses created be related to the user's profile feed mentioning?
- Is it possible to mention people I don't follow?
- Is it possible to disable this functionality of not being mentioned by some user that I don't follow?
- Is it possible to repost mentions?
- Is it possible to cite mentions?
- Will we create some kind of notification for these mentions?

## Planning:

First, it would be necessary to prepare the design for the feed of the mentions that will be made, in addition to improving the CardItem component to allow, to mention that it will be necessary to add the same text field that is used to add a post.

the text field will need to be improved, so that when the user starts to write the @ with the username, give the option to see the user profile that will be mentioned in the post answer. It will be necessary to create a new service within the front-end to make requests to the API.

On the database side, it will be necessary to create a relationship between the post that was made, with the mention that was made to the user, responding to that post. So thinking about it, it would be a relationship with the id of the user who is mentioning someone, the id of the user who received the mention, and the id of the post being replied to.

With this information, on the API side, it would be necessary to create one more endpoint to return all the citations performed. This endpoint would receive the id of the user who is logged in, and should return all posts in which the user in question was mentioned. To make it easy for the user to see, you can create a timeline for each post, and add to the timeline every discussion about that post with the mentions made in it. For this, the API will return the model of a normal post, but with a response parameter, returning all mention posts within it.

# Critique

If there was more time, it would be nice to refactor the usePosts context to have more flexibility with requests and the different filter scenarios performed, making it possible to reuse it in all different scenarios, without having to perform some data processing on the front-end.

Also, it would remove some frontend data handling responsibilities that were done. I believe that as much as possible, we should put business rules and data handling in the backend, in order to have a more performant application.

The way in which the handling of URLs was handled, if there was more time, I believe it would be done differently. The built-in logic is a bit cumbersome and can lead to some confusion. Therefore, the ideal would be to use all the resources of react-router-dom, including the construction of more than one page in the application to display the data.

With more time, it would be possible to build a mockup in figma to be able to define some patterns in the design, in addition to creating components that can be more reusable. In this case, I would start the application with margin patterns, defined paddings, even using relative measurement units.

Working with memoization in React is also super important to avoid unnecessary rendering. In this case, I believe that it would be extremely important for any application to implement these features to improve the performance of the application.

## Scaling

When scaling the application, the first part that would undoubtedly fail would be the feed. The application was developed to be something small, but the list of posts without any type of pagination would create a very heavy page, in addition to the data processing performed on the front-end that would make the application less performant.

First of all, what would be needed to design the application and make it scalable with a development team, increasing its functionality, would be the use of TypeScript. It allows for greater code organization, preventing problems when scaling the application. It wouldn't be necessary to change the whole project at once, but super important to start with new features and parts that would be refactored.

It is also important to use a state manager like redux to manage some things in the application.

Add pagination in several existing requests within the platform, in order to increase page speed. It would also be interesting to start using a design system to increase the speed of creating new features.

For infrastructure, it would be interesting to use AWS services, S3 + Cloudfront + Route 53 for the front-end, and for the back-end Kubernetes inside an EC2 to manage the application containers, along with Load Balancing and Auto Scaling configured.
