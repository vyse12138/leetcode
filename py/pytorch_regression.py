import torch
import torch.nn.functional as F
import matplotlib.pyplot as plt

x = torch.unsqueeze(torch.linspace(-1, 1, 100), dim=1)
y = x.pow(2) + 0.2*torch.rand(x.size())
'''
以上两行代码的作用为：
生成了训练数据 x 和目标 y, 使得 y = x^2 + 0.2x (并且加上了噪音)
'''


class Net(torch.nn.Module):
    def __init__(self, n_feature, n_hidden, n_output):
        super(Net, self).__init__()
        self.hidden = torch.nn.Linear(n_feature, n_hidden)
        self.predict = torch.nn.Linear(n_hidden, n_output)

    def forward(self, x):
        x = F.relu(self.hidden(x))
        x = self.predict(x)
        return x


'''
以上class定义的作用为：
定义了一个神经网络类, 在初始化时定义了神经网络的输入层数, 隐藏层数, 和输出层数
并且定义了 forward 方法函数, 用于描述正向传播过程
'''

net = Net(n_feature=1, n_hidden=10, n_output=1)
print(net)

optimizer = torch.optim.SGD(net.parameters(), lr=0.2)
loss_func = torch.nn.MSELoss()

plt.ion()

for t in range(200):
    prediction = net(x)
    loss = loss_func(prediction, y)
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()

    if t % 5 == 0:
        plt.cla()
        plt.scatter(x.data.numpy(), y.data.numpy())
        plt.plot(x.data.numpy(), prediction.data.numpy(), 'r-', lw=5)
        plt.text(0.5, 0, 'Loss=%.4f' % loss.data.numpy(),
                 fontdict={'size': 20, 'color':  'red'})
        plt.pause(0.1)
'''
这部分for循环的作用为：
迭代训练过程, 通过正向传播计算预测值, 然后使用损失函数计算误差并反向传播更新网络权重
同时每隔 5 次循环通过 matplotlib 来展示拟合效果和 loss 值

'''
plt.ioff()
plt.show()
