export function getImageUrl(person, size = 's') {
  let url = "https://i.imgur.com/";
  return (
    url + person.imageId + size + '.jpg'
  );
}