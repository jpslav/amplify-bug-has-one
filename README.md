Created this with:

```bash
npx create-expo-app HasOneIssue
cd HasOneIssue/
npx amplify-app@latest
npm install aws-amplify @aws-amplify/datastore-storage-adapter expo-sqlite expo-file-system @react-native-community/netinfo @react-native-async-storage/async-storage
```

Then added some models, then ran `npm run amplify-modelgen`.
