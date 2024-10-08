---
title: Native App vs. Cross-Platform Development
description: Lessons Learned from going from React Native to building my first native iOS App.
publishedAt: 2024-10-07
---

![A person holding a phone](/images/mobile-app.jpg)

When building mobile apps, developers often face a critical choice between **Native app development** and **Cross-platform development**. After working extensively with **React Native** in a professional setting and recently building my first **native iOS app**, I learned firsthand the strengths and trade-offs of each approach.

## Native App Development

Native apps are built specifically for one platform:

- **iOS**: Uses **Swift** and **SwiftUI**/**UIKit** for creating apps that feel fully integrated with the iOS ecosystem.
- **Android**: Built with **Kotlin** or **Java**, tailored for the Google Play Store.

### Pros:

- **Performance**: Native apps provide excellent performance. While working on my first native iOS app, I noticed how much smoother animations and interactions were compared to my React Native experience.
- **Access to Device Features**: Native apps give you full access to the latest device-specific features. While building my iOS app, I could easily use new APIs without waiting for a third-party library to catch up, which is something that slowed me down when using React Native.

- **Intuitive UI**: One thing that stood out during my iOS app development was how opinionated the UI design is. iOS users are accustomed to a certain look and feel, and by using **SwiftUI**, it felt natural to create something that met these expectations. It allowed the app to feel "native" from day one, and users familiar with the platform could navigate it intuitively.
  When I saw features like swipe-to-go-back implemented right out of the box, it was mind-blowing.

### Cons:

- **Separate Codebases**: The downside is that if I wanted to release the same app to the Android store, I’d have to start from scratch with **Kotlin**, which doubles the workload, on top of having to learn a whole new language. At my last job, this wasn’t an option due to budget and time constraints.

- **Higher Maintenance**: Maintaining two separate codebases means more effort when platform updates roll out. In a fast-moving environment, it can be hard to keep both versions in sync.

## Cross-Platform Development

During my time working with **React Native**, I experienced both the benefits and the pitfalls of cross-platform development. We chose React Native because our team was already proficient with **JavaScript/TypeScript**, and it allowed us to maintain a single codebase for both iOS and Android apps.
![A person holding a phone](/images/React-icon.png)

### Pros:

- **Single Codebase**: The biggest advantage of React Native was being able to write once and deploy on both iOS and Android. This saved us significant development time and allowed us to get new features out quickly. For internal tools, this approach worked well.

- **Faster Onboarding**: Since many of our developers came from a **React.js** background, moving to React Native was straightforward. When I first joined the team, I had no prior experience with React Native, but adjusting to the codebase wasn't too difficult. Since it was written in TypeScript and the components were structured similarly to React—both of which I was already familiar with— it was easy to grasp what was going on.
- **Cost-Efficient**: From a business perspective, maintaining one codebase instead of two was far more cost-effective, especially when you factor in long-term maintenance. Also, keeping the same programming languages throughout different projects, makes things easier during the hiring process.

### Cons:

- **Performance Issues**: However, I quickly learned that React Native’s performance can lag behind native development, especially with animations or more complex features. I worked on an app where certain interactions felt sluggish because React Native uses a **JavaScript bridge** to communicate with native modules, which introduces delays. There were times when this made me wish that we were building natively so our users can have a better experience. This made me appreciate the fluidity of native iOS development even more.

- **Debugging Challenges**: Debugging in React Native also posed challenges. Some errors were difficult to trace because of the abstraction layer between JavaScript and native code. Most of the times, I would have to resort to googling the error message to try to understand the root issue. In contrast, while building natively, debugging was more straightforward and I could directly interact with the underlying system.

- **Library Dependency**: In React Native, we heavily relied on third-party libraries for accessing device-specific features such as background locations, and this became a pain point. Sometimes, libraries wouldn’t be updated fast enough to fix known bugs or support new iOS or Android versions, delaying development.

Companies such as [Airbnb](https://medium.com/airbnb-engineering/sunsetting-react-native-1868ba28e30a) have moved away from React Native to focus on native development for some of the above reasons.

## Conclusion

Through my experience, I learned that **Native development** is ideal for performance-critical apps that need deep platform integration and provide the best user experience for each platform. The fluid performance and ease of accessing the latest device features were standout benefits when I built my native iOS app.

On the other hand, **Cross-platform development** with frameworks like **React Native** is perfect for saving time and cost, especially when launching an app for both platforms with a single codebase. This approach is great for internal apps or simpler use cases where performance isn't the top priority.

Ultimately, the right choice depends on the app’s requirements, your budget, and the expertise of your team. If you need an app with high performance and rich user experience, **native development** is worth the investment. For most other cases, **cross-platform** can deliver solid results with faster development cycles.

---
