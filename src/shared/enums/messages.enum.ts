enum MessagesEnum {
  REQUIRED = "Поле должно быть заполнено",
  PHONE_VALID = "Номер телефона недействителен",
  EMAIL_VALID = "Пожалуйста, введите правильный адрес электронной почты",
  NICKNAME_MAX_VALUE = "Максимальная длина 30 символов (спец символы запрещены)",
  NICKNAME_SPECIAL_VALUE = "Спец символы запрещены",
  NAME_MAX_VALUE = "Максимальная длина 50 символов (Цифры запрещены)",
  NAME_WORDS_VALUE = "Цифры запрещены",
  ABOUT_MAX_VALUE = "Максимальная длина 200 символов"
}

export default MessagesEnum;
