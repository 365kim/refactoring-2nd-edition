public Resource get() {
  Resource result = available.isEmpty() ? Resource.create() : available.pop();
  allocated.add(result);
  return result
}