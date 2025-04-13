# 🐾 KesavPokeApp

KesavPokeApp is a cross-platform mobile application built with **React Native**. This app is designed for both Android and iOS devices and demonstrates a complete working environment setup, proper version control, and platform-specific configuration for 3 sided cube -- Native task.

---

## 📱 Features

- Built with **React Native CLI**
- Supports both **Android** and **iOS**
- Configured with:
  - ✅ Java 17
  - ✅ Android SDK
  - ✅ iOS Xcode + Simulator
- Version control with GitHub

---

## 🛠️ Development Environment Setup

### ✅ Prerequisites

- **Node.js**
- **Java Development Kit (JDK 17)**
- **Android Studio & SDK**
- **Xcode (for iOS)**
- **Git + GitHub CLI**
- **Homebrew** (for Mac users)

---

## ⚙️ Android Setup

### 1. Install Java 17 via Homebrew

```bash
brew install openjdk@17
### 2. Set Java 17 as the default version

```bash
sudo ln -sfn /usr/local/opt/openjdk@17/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk
export JAVA_HOME=$(/usr/libexec/java_home -v 17)
export PATH="$JAVA_HOME/bin:$PATH"
```

### 3. Install Android Studio

- Download and install **Android Studio** from [here](https://developer.android.com/studio).
- Open Android Studio and install the required SDKs and tools.

### 4. Configure Environment Variables

Add the following lines to your shell configuration file (`~/.zshrc` or `~/.bashrc`):

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$PATH
```

---

## ⚙️ iOS Setup

### 1. Install Xcode

- Download and install **Xcode** from the Mac App Store.
- Open Xcode and install the required components.

### 2. Install CocoaPods

```bash
sudo gem install cocoapods
```

### 3. Configure iOS Simulator

- Open Xcode, go to **Preferences > Locations**, and set the Command Line Tools to the latest version of Xcode.
- Use the iOS Simulator to test your app.

---

## 🚀 Running the App

### 1. Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

### 2. Start the Metro Bundler

```bash
npx react-native start
```

### 3. Run on Android

```bash
npx react-native run-android
```

### 4. Run on iOS

```bash
npx react-native run-ios
```

---

## 📂 Project Structure

```
KesavPokeApp/
├── android/        # Android-specific files
├── ios/            # iOS-specific files
├── src/            # Application source code
│   ├── components/ # Reusable components
│   ├── screens/    # App screens
│   ├── assets/     # Images, fonts, etc.
│   └── utils/      # Utility functions
├── package.json    # Project metadata and dependencies
└── README.md       # Project documentation
```

---


## 🙌 Acknowledgments

- **React Native** for providing a robust framework.
- **OpenJDK** and **Android Studio** for development tools.
- **Xcode** for iOS development.


## 🧑‍💻 Author
Kesavraj Pandiaraj
MSc Student | Full Stack Developer | Kesavrajpandiaraj@gmail.com