from gtts import gTTS
import os
import pygame  # 添加 Pygame 库

text = '''
我坐在书桌前，手中捧着《黄帝内经》。它被视为中医的基础性著作，被誉为传承几千年的中华文明之精华。我被它的古老智慧深深吸引着，想要更加深入地了解上古时期的神秘。

不过，现代人却很难相信古代的奇异事迹，如长生不老的传说。然而，这些文献中都隐隐约约地提到了上古时期的存在。

我计划参加一个大学同学聚会，但与昔日的同学刘云志之间似乎有些尴尬的关系。所以，我决定和林佳步行前往，而刘云志则驾车抵达。

在天色渐暗的时候，一个震撼人心的场景在黑暗的宇宙中上演。旅行者二号探测器已经飞行了30多年，发现了九具庞大的龙尸。但这些信息并没有向外公布，因为人类无法到达这个遥远的地方。
'''
 # 您想要转换为语音的文本

# 创建 gTTS 对象
tts = gTTS(text, lang='zh-cn')

# 保存语音输出文件
tts.save("output.mp3")

# 使用 Pygame 播放语音输出文件
pygame.init()
pygame.mixer.music.load("output.mp3")
pygame.mixer.music.play()

# 让程序一直运行直到播放结束
while pygame.mixer.music.get_busy():
    continue

# 删除输出文件
os.remove("output.mp3")