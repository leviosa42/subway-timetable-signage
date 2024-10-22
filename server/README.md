## Endpoint

### GET `/api/v1/timetable`

#### params

| Key         | Type     | Description                                      |
| ----------- | -------- | ------------------------------------------------ |
| `base_date` | `string` | 現在時刻として扱う日付 (ISO 8601 形式)           |
| `amount`    | `number` | 与えられた日付より何件先までの時刻表を取得するか |

#### response

<details>
<summary>200 OK</summary>

| Key          | Type       | Description              |
| ------------ | ---------- | ------------------------ |
| `amount`     | `number`   | 与えられた `amount` の値 |
| `timetable`  | `string[]` | `amount` 件の時刻表      |
| `base_date`  | `string`   | 与えられた基準となる日付 |
| `is_weekday` | `boolean`  | 平日かどうか             |

#### example

```json
{
  "amount": 5,
  "timetable": [
    "2024-10-22T16:25:00+00:00",
    "2024-10-22T16:30:00+00:00",
    "2024-10-22T16:35:00+00:00",
    "2024-10-22T16:40:00+00:00",
    "2024-10-22T16:45:00+00:00"
  ],
  "now": "2024-10-22T16:25:00+00:00",
  "is_weekday": true
}
```

</details>

<details>
<summary>400 Bad Request</summary>

```json
{
  "message": "Invalid date format"
}
```

```json
{
  "message": "Invalid amount"
}
```

```json
{
  "message": "Invalid date format and amount"
}
```

</details>
