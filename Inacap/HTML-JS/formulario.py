import time
import sys

lyrics = """You can tell them that
I've been from hell and back
When the heat is on
I fire back
In this cold world
Where your lighters at
Let's burn it down
Fire back
You can tell them that
I've been from hell and back
When the heat is on
I fire back
In this cold world
Where your lighters at
Let's burn it down
Fire back"""

def reveal_lyrics(lyrics, delay=0.05):
    for char in lyrics:
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(delay)

if __name__ == "__main__":
    reveal_lyrics(lyrics)
