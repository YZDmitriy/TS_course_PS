interface PaymentPersistent {
  id: number;
  sum: number;
  from: string;
  to: string;
}
// Pick

type PaymentPick = Pick<PaymentPersistent, 'id' | 'sum'>; // оставляем только id и sum

// Omit

type PaymentOmit = Omit<PaymentPersistent, 'id'>; // исключаем id

// Extract

type PaymentExtract = Extract<'from' | 'to' | PaymentPick, string>; // возвращает соответствие указанному типу после запятой

// Exclude

type PaymentExclude = Exclude<'from' | 'to' | PaymentPick, string>; // возвращает то, что НЕ соответствует указанному типу после запятой

// Отбор проходит по указанному union типу.
// Автор указал 'from' | 'to' | Payment
// и я сначала подумал, что 'from' и 'to' - это ключи из Payment, которые имеют тип string.
// На самом деле, тут могло быть указано что угодно, к примеру, 'car' | 'boat'
// и это является string типом, т.к. записывается через кавычки.
// И теперь, возвращаясь к Exclude, мы яснее понимаем, что из union типа 'from' | 'to' | Payment,
// string являются только 'from', 'to'.
// Соответственно Exclude исключает эти типы (т.к. мы это указали после запятой string) и возвращает нам Payment.
// Extract - это всё то же самое, только из union типа возвращается то,
// что соответствует указанной после запятой string, а что не соответствует - исключается.
// P.S. Более кратко, Extract - возвращает соответствие указанному типу после запятой,
// а Exclude - возвращает то, что НЕ соответствует указанному типу после запятой.
