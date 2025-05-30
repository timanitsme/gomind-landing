const securityPolicy = (language) => language === "ru"? `
### 1. Общие положения
1.1. Настоящая Политика безопасности (далее – «Политика») определяет порядок обработки, защиты и хранения данных, которые могут быть получены при использовании сервисов Сайта (далее – «Сервис»).

1.2. Администрация Сайта обязуется принимать все необходимые меры для защиты данных Пользователей, включая использование современных технологий шифрования и соблюдение принципов конфиденциальности.

---

### 2. Шифрование данных
2.1. Все данные, передаваемые между Пользователем и Сервисом, шифруются с использованием протоколов SSL/TLS. Это обеспечивает защиту информации от несанкционированного доступа и перехвата данных третьими лицами.

2.2. Администрация Сайта применяет современные методы криптографической защиты данных, включая хэширование паролей и другие технологии, направленные на предотвращение утечек информации.

2.3. Передача данных осуществляется исключительно через защищенные каналы связи, что гарантирует их целостность и конфиденциальность.

---

### 3. Хранение личных данных
3.1. Администрация Сайта не собирает и не хранит личные данные Пользователей, такие как имя, фамилия, адрес электронной почты, номер телефона или иные персональные сведения, если это не требуется для функционирования Сервиса.

3.2. В случае необходимости получения личных данных Пользователя (например, для регистрации или авторизации), такие данные используются только в рамках, предусмотренных настоящей Политикой и действующим законодательством.

3.3. Администрация Сайта обязуется не передавать личные данные Пользователей третьим лицам, за исключением случаев, предусмотренных законодательством Российской Федерации.

---

### 4. Безопасность данных
4.1. Администрация Сайта принимает все разумные меры для защиты данных Пользователей от несанкционированного доступа, изменения, раскрытия или уничтожения.

4.2. Для обеспечения безопасности данных применяются следующие меры:
- Использование защищенных протоколов передачи данных (SSL/TLS);
- Регулярное обновление программного обеспечения для предотвращения уязвимостей;
- Ограничение доступа к данным только для авторизованных сотрудников Администрации Сайта.

4.3. Пользователь соглашается с тем, что полная защита данных невозможна в условиях глобальной сети Интернет, и Администрация Сайта не несет ответственности за действия третьих лиц, направленные на несанкционированный доступ к данным.

---

### 5. Отказ от ответственности
5.1. Администрация Сайта не несет ответственности за любые последствия, возникшие в результате несанкционированного доступа к данным Пользователя, если такие действия были совершены третьими лицами.

5.2. Пользователь обязуется самостоятельно принимать меры для защиты своих учетных данных, включая использование сложных паролей и своевременное изменение их при необходимости.

5.3. Администрация Сайта оставляет за собой право вносить изменения в настоящую Политику без предварительного уведомления Пользователя. Пользователь обязуется проверять актуальность Политики не реже одного раза в тридцать дней.

---

### 6. Заключительные положения
6.1. Настоящая Политика является неотъемлемой частью Пользовательского соглашения и других документов, регулирующих использование Сервиса.

6.2. В случае возникновения споров или разногласий, связанных с настоящей Политикой, стороны обязуются решать их путем переговоров. При недостижении согласия споры подлежат рассмотрению в соответствии с действующим законодательством Российской Федерации.
`:
`
### 1. General Provisions
1.1. This Security Policy (hereinafter referred to as the "Policy") defines the procedure for processing, protecting and storing data that may be obtained when using the services of the Site (hereinafter referred to as the "Service").

1.2. The Site Administration undertakes to take all necessary measures to protect User data, including the use of modern encryption technologies and compliance with the principles of confidentiality.

---

### 2. Data Encryption
2.1. All data transmitted between the User and the Service are encrypted using SSL/TLS protocols. This ensures the protection of information from unauthorized access and interception of data by third parties.

2.2. The Site Administration uses modern methods of cryptographic data protection, including password hashing and other technologies aimed at preventing information leaks.

2.3. Data is transferred exclusively through secure communication channels, which guarantees their integrity and confidentiality.

---

### 3. Storage of personal data
3.1. The Site Administration does not collect or store personal data of Users, such as first name, last name, email address, phone number or other personal information, unless it is required for the functioning of the Service.

3.2. If it is necessary to obtain personal data of the User (for example, for registration or authorization), such data is used only within the framework provided for in this Policy and current legislation.

3.3. The Site Administration undertakes not to transfer personal data of Users to third parties, except in cases stipulated by the legislation of the Russian Federation.

---

### 4. Data security
4.1. The Site Administration takes all reasonable measures to protect User data from unauthorized access, modification, disclosure or destruction.

4.2. The following measures are used to ensure data security:
- Use of secure data transfer protocols (SSL/TLS);
- Regular software updates to prevent vulnerabilities;
- Restricting access to data only to authorized employees of the Site Administration.

4.3. The User agrees that complete data protection is impossible in the conditions of the global Internet, and the Site Administration is not responsible for the actions of third parties aimed at unauthorized access to data.

---

### 5. Disclaimer
5.1. The Site Administration is not responsible for any consequences arising from unauthorized access to the User's data, if such actions were committed by third parties.

5.2. The User undertakes to independently take measures to protect their account data, including the use of complex passwords and timely change them if necessary.

5.3. The Site Administration reserves the right to make changes to this Policy without prior notice to the User. The User undertakes to check the relevance of the Policy at least once every thirty days.

---

### 6. Final Provisions
6.1. This Policy is an integral part of the User Agreement and other documents governing the use of the Service.

6.2. In the event of disputes or disagreements related to this Policy, the parties undertake to resolve them through negotiations. If agreement is not reached, disputes shall be considered in accordance with the current legislation of the Russian Federation.
`

export default securityPolicy;