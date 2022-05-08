public Resource get() {
  Resource result;

  try {
    result = available.pop();
    allocated.add(result);
  } catch(NoSuchElementException e) {
    result = Resource.create();
    allocated.add(result);
  }
  return result
}