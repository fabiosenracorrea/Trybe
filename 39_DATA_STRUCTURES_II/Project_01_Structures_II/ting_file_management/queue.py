FIRST_ITEM_INDEX = 0
NO_ITEMS = 0


class Queue:
    def __init__(self):
        self.queue = []

    def __len__(self):
        return len(self.queue)

    def enqueue(self, value):
        self.queue.append(value)

    def dequeue(self):
        if len(self.queue) == NO_ITEMS:
            return None

        out_item = self.queue.pop(FIRST_ITEM_INDEX)

        return out_item

    def search(self, index):
        queue_size = len(self.queue)

        if index >= queue_size or index < NO_ITEMS:
            raise IndexError("Posição inválida")

        return self.queue[index]
