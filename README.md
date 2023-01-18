Created this with:

```bash
npx create-expo-app HasOneIssue
cd HasOneIssue/
npx amplify-app@latest
npm install aws-amplify @aws-amplify/datastore-storage-adapter expo-sqlite expo-file-system @react-native-community/netinfo @react-native-async-storage/async-storage
```

Then added some models, then ran `npm run amplify-modelgen`.

To reproduce the error, run `npm start`, then choose the iOS Simulator (though any available option should cause DataStore to start and the error to be generated).
