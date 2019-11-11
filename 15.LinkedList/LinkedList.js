function Solution() {
  var Node = function(data) {
    this.data = data;
    this.next = null;
  };
  this.insert = function(head, data) {
    //complete this method

    var newNode = new Node(data);
    if (head === null) {
      head = newNode;
    } else {
      var currentNode = head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    return head;
  };

  this.display = function(head) {
    var start = head;
    while (start) {
      process.stdout.write(start.data + " ");
      start = start.next;
    }
  };
}
