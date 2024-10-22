## Example data

- 時刻表

```json
{
  "timetable": [
    "5:35",
    "5:53",
    "6:10",
    ...
  ]
}
```

## Schema

```json
{
  "type": "object",
  "properties": {
    "timetable": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}
```
