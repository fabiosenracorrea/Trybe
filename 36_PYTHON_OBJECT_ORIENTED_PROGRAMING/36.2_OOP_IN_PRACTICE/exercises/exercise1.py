class TV:
  def __init__(self, config):
    configChannel = config['channel']
    configVolume = config['volume']

    if (not(configChannel) or (configChannel < 1) or (configChannel > 99)):
      raise BaseException('Value Error')

    if (not(configVolume) or (configVolume < 0) or (configVolume > 99)):
      raise BaseException('Value Error')

    self.__size = config['size']
    self.__volume = configVolume or 50
    self.__channel = configChannel or 1
    self.__on = False

  def raiseVolume(self):
    currentVolume = self.__volume

    if (currentVolume < 99):
      self._volume = currentVolume + 1


  def reduceVolume(self):
    currentVolume = self.__volume

    if (currentVolume > 0):
      self._volume = currentVolume - 1


  def changeChannel(self, newChannel):
    if ((newChannel < 1) or (newChannel > 99)):
      raise BaseException('Value Error')

    self._channel = newChannel

  def turnOnOf(self):
    self.__on = not(self.__on)
    print(self.__on)


tvConfig = {
  'size': 50,
  'volume': 40,
  'channel': 20,
}

myTV = TV(tvConfig)

# use...
