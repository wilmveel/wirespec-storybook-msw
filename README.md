# Example integration of msw + wirespec

## Start

```
npm install
npm run storybook
```

Go to `http://localhost:6006/?path=/story/example-button--primary`

Click blue button

## Notes

- `init.js` contains script to transform wirespec ast into `[petstore.db.ts](gen%2Fpetstore.db.ts)`
- folder `gen` contains generated source. 
- folder `spec` contains the contracts in openapi and ws
