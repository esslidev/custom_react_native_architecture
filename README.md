##### projekt0_frontend

# expo_commands

- npx create-expo-app project-name -t expo-template-blank-typescript
  -expo init YourProjectName

- cd projekt0
- npm start # you can open iOS, Android, or web from here, or run them directly with the commands below.
- npm run android
- npm run ios # requires an iOS device or macOS for access to an iOS simulator
- npm run web

-control + m in the emulator opens the additional options like debugging

# react-native Components

- View:
  The fundamental building block for creating UI components.
  It's like a <div> in web development and serves as a container for other components.

- SafeAreaView:
  Ensures that content is displayed within the safe area of the device, which is the area not covered by system UI elements like the status bar or notch on iOS devices.
  Essential for ensuring that content remains visible and functional, even on devices with varying screen shapes and sizes.
  Often used as a container for your main application content or components to ensure they are not obscured by system elements.
  Typically employed at the top and/or bottom of your app's screen, wrapping your app's header, navigation bar, or other UI components that need to be aligned correctly within the safe area.

- Text:
  Used to display text and typography in your app.
  Supports styling, such as fonts, colors, and text formatting.

- Image:
  Renders images in your application, both local and remote.
  Supports image caching and resizing.

- TextInput:
  Provides a text input field that allows users to enter text.
  Commonly used for forms and user input.

- Button:
  Creates a clickable button element.
  Supports customizable text and styling.

- ScrollView:
  Allows you to create a scrollable list of components.
  Useful for long lists or content that doesn't fit on the screen.

- FlatList:
  Efficiently renders a large list of items.
  Supports lazy loading and optimized performance.

- SectionList:
  Similar to FlatList but for sectioned lists, often used in categorized data.

- ActivityIndicator:
  Displays a loading spinner to indicate that a task is in progress.

- TouchableHighlight/TouchableOpacity/TouchableWithoutFeedback:
  These components provide touchable areas in your app.
  Used for creating interactive elements like buttons or links.

- Modal:
  Displays a modal dialog or popup window.
  Commonly used for alerts, prompts, or additional information.

- Picker:
  Renders a dropdown list or picker for selecting options.
  Useful for selecting from a list of predefined values.

- DatePickerIOS/TimePickerAndroid:
  These components allow users to select dates and times.
  Platform-specific due to differences in date and time input.

- WebView:
  Embeds web content within your app.
  Useful for displaying web pages or web-based features.

- ActivityIndicator:
  Displays a loading spinner to indicate that a task is in progress.

- Switch:
  Renders a toggle switch for binary options, such as enabling or disabling a feature.

- StatusBar:
  Controls the appearance of the status bar at the top of the screen.
  Allows you to set its color and visibility.

- Slider:
  Creates a slider control for selecting a value within a specified range.
  Commonly used for settings or volume controls.

- DrawerLayoutAndroid:
  Implements a navigation drawer, commonly used for side menus.

- ViewPager/ViewPagerAndroid:
  Allows you to implement swipable views, often used in tabbed navigation.

# project tree

project/
├── assets/
│ (Static assets like images, fonts)
│
├── styles/
│ (Stylesheets and style-related code)
│
├── components/
│ ├── Home/
│ │ ├── actions/
│ │ │ (Redux action creators for Home component)
│ │ │
│ │ ├── sagas/
│ │ │ (Redux Saga code for Home component)
│ │ │
│ │ ├── reducers/
│ │ │ (Redux reducers for Home component)
│ │ │
│ │ ├── container/
│ │ │ ├── HomeSmart.tsx
│ │ │ (Smart/Container component for Home)
│ │ │
│ │ │ ├── HomeDumb.tsx
│ │ │ (Dumb/Presentational component for Home)
│ │
│
├── constants/
│ (Constant values or configurations)
│
├── redux/
│ ├── store.ts
│ (Creates Redux store)
│ │
│ ├── rootReducers.ts
│ (Combines all reducers into a root reducer)
│ │
│ ├── rootSagas.ts
│ (Combines all Redux Sagas)
│
├── utils/
│ ├── middlewares/
│ │ ├── actionMiddleware.ts
│ (Custom Redux middleware)
│
├── hooks/
│ ├── homeHooks.ts
│ (Custom React hooks)
│
├── app.ts
(Entry point of your React Native app)
