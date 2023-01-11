export function phoneNumberValidator(phoneNumber) {
  const re =
    /^(05[5|8|9]|08[1|2|3|4|5|86|9]|03[2|3|4|5|6|7|8|9]|07[0|9|7|6|8]|09[0|2|1|4|3|6|7|8|9]|01[2|9])+([0-9]{7,8})$/;
  if (!re.test(phoneNumber)) return 'Số điện thoại không hợp lệ';
  return '';
}
