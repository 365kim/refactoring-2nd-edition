// renderPerson은 그대로 둔 채 listRecentPhotos가 location을 다르게 렌더해야할 경우

function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter((p) => p.date > recentDateCutoff())
    .forEach((p) => {
      outStream.write('<div>\n');
      emitPhotoData(outStream, p);
      outStream.write('</div>\n');
    });
}

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>제목: ${p.title}</p>`);
  outStream.write(`<p>제목: ${photo.date.toString()}</p>`);
  outStream.write(`<p>제목: ${photo.location}</p>`);
}
