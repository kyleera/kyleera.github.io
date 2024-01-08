---
title: 毕业设计《纯电动赛车行星齿轮减速机设计与分析》（随笔版）
date: "2023-04-28T22:12:03.284Z"
description: "本文研究基于轻量化、低成本和高效率，满足赛事主旨和赛车性能要求，设计一台以双电机驱动FSEC赛车中的行星齿轮减速机。根据整车基本参数和性能指标匹配赛车优选的驱动电机，进行动力参数匹配确定传动比。对行星齿轮传动系统进行参数计算、受力分析和强度校核。利用Catia三维建模软件建立行星齿轮减速机模型，通过ANSYS有限元分析软件，模拟极限工况下行星齿轮减速机的工作状态..."
---






## 摘要

当前全球石油能源日益紧张，在国家政策法规的辅助下，电动汽车产业必然是时代发展的重心，因此一个培养锻炼学生的实践创新综合能力的平台至关重要。中国大学生电动方程式大赛，顺应汽车技术往智能化、节能环保化的发展趋势，以培养汽车工程为目的，为中国电动汽车产业提供许多年轻专业人才。

随着FSEC赛车多年的发展，对于普通单电机集中式链传动形式已不能满足赛车的需求，双电机分布式加减速机的驱动形式正逐步成为主流，能简化机械结构，传动效率更高。而减速机的种类中，行星齿轮传动减速机最具代表性，有着体积小、重量轻、结构紧凑、承载能力强、寿命长、传动效率高、传动比大、可靠性强、减速范围广和精度高等优势，能起到降低转速增大扭矩和降低负载(电机)的转动惯量比的作用，广泛引用在工程机械、轻工纺织和航空航天等领域。因此，针对行星齿轮减速机进行研究，对纯电动赛车整体水平有着重要的意义。

本文研究基于轻量化、低成本和高效率等方面为满足赛事主旨和赛车性能要求，设计一台以双电机驱动FSEC赛车中的行星齿轮减速机。首先根据整车基本参数和性能指标匹配赛车优选的驱动电机，进行动力参数匹配确定传动比。接着对行星齿轮传动系统进行参数计算、受力分析和强度校核。最后利用Catia三维建模软件建立行星齿轮减速机模型，通过ANSYS有限元分析软件，模拟极限工况下行星齿轮减速机的工作状态，并对行星齿轮传动系统不同部件进行有限元静力学分析和拓扑优化。

**关键词：** `减速机`，`行星齿轮传动`，`结构建模设计`，`有限元分析`







## 1 研究内容
全文将从以下四个方面展开说明

①确定FSEC赛车驱动系统的布置形式，分析双电机分布式驱动系统的具体组成部分，根据整车基本参数和动力性能指标，匹配赛车最优选的驱动电机，进行动力参数匹配，确定赛车传动比范围。

②确定行星齿轮传动系统的类型，根据动力参数匹配的传动比，对行星齿轮传动系统进行几何尺寸的参数计算、效率计算、受力分析和强度校核。

③根据几何尺寸参数，利用Catia三维建模软件建立行星齿轮减速机的三维模型。

④利用ANSYS有限元分析软件，模拟极限工况下行星齿轮减速机的工作状态，并对行星齿轮传动系统不同部件进行有限元静力学分析和拓扑优化。
<br/><br/>











## 2 整车动力系统参数匹配
### 2.1 驱动系统布置形式及特点

电机外特性曲线如下图2-1所示，电动车具备充足的起动扭矩，能够快速起步而达到目标速度，故纯电动赛车的传动系统只有减速机构，没有变速机构。由于驱动电机数量在赛事规则中并没有限制，因此有多种驱动形式方案，如下图2-2所示。

<!-- 1张图片 + 图注 -->
<div style="display:flex; justify-content:center;">
    <div style="width:40%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/2-1.png"  />
        <span style="color:#666; font-size: 0.85rem;">图2-1 电机外特性曲线 </span>
    </div>
</div>
<br/>

①单电机后轮集中式驱动：布置工作容易且成本较低，使用较为广泛。动力传递的路线是驱动电机、减速机、差速器、半轴直到车轮。缺点是驱动力只能作用在后轮，不能充分利用地面附着力。

②双电机后轮分布式驱动：多电机独立驱动可减小单电机的额定功率，可选择更小更轻的电机型号，增加驱动系统布置的灵活性，轴荷分配也更加合理。简化了传递系统的机构设计，减少了赛车的整备质量，提高整体性能。动力传递路线是驱动电机、减速器、半轴直到车轮。两台电机分布控制两个轮胎，使用电子控制差速算法，能够比传统的差速器机械差速实现更大的速度差，减少驱动轮滑转和动力浪费，故本文选取双电机布置形式作为设计方案。

③四轮毂电机独立式驱动：是未来FSEC赛车中最值得发展的方向，传递动力路线和双电机驱动相同，不同在于四台电机独立控制四个轮胎，缩减了传动系统的机械长度，提高效率。四轮驱动能充分利用所有车轮的附着力，最大限度发挥电机动力，避免动力浪费。其缺点是成本昂贵，选用的电机外廓尺寸和整车的控制精度要求特别高，电机比功率要大，同时控制算法很复杂，且需要大量的试验验证。




<!-- 多张图片 + 图注 -->
<div style="display:flex; justify-content:space-between;">
    <div style="width:30%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/2-2_1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图2-2(1) 单电机集中式驱动 </span>
    </div>
    <div style="width:30%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/2-2_1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图2-2(2) 双电机分布式驱动 </span>
    </div>
    <div style="width:30%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/2-2_1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图2-2(3) 四轮毂电机独立式驱动 </span>
    </div>
</div>






### 2.2 整车基本参数与动力性能指标
#### 2.2.1 整车基本参数

整车的基本参数对动力参数匹配会产生特大影响，故要保证设计的动力系统符合整车的基本参数要求。纯电动赛车的基本参数如下表2-1所示，是根据FSEC赛事规定的要求、以及参考其他国内外往届不同车队积累的设计经验确定。

<!-- 表注 -->
<div style="display:flex; justify-content:center;">
    <span style="color:#666; font-size: 0.8rem;">表2-1 整车基本参数 </span>
</div>
<br/>

<!-- 表格(可用网站生成代码) -->
| 技术参数      | 符号(单位)   | 数值             |
|:---------|:--------|--------------:|
| 外廓尺寸      | `-- (mm)`  | `2900×1400×1200` |
| 满载质量（含车手） | `m (kg)`    | `340`            |
| 轴距        | `l (mm)`    | `1550`           |
| 轮胎滚动半径    | `r (mm)`    | `228.6`          |
| 轴荷分配      | `a : b (%)` | `48 : 52`        |
| 质心高度（满载）  |`h (mm)`    | `253`            |
| 迎风面积      | <code class="language-text">a ($m^2$)</code> | `0.9`            |
| 空气阻力系数    | <code class="language-text">$C_D$</code>    | `0.35`           |
| 滚动阻力系数    | `f`        | `0.015`          |
| 地面附着系数    | `φ`        | `1.7 `           |
| 传动效率      | `η (%)`     | `90`             |





#### 2.2.2 动力性能指标

动力性能指标对赛车的动态表现起至关重要的作用，直接决定了动力系统总成、整车动力性能和比赛的最终成绩。根据不同动态竞赛项目中的工况分析，由于专业赛场坡度极小，且具备良好的路面条件，因此不进行最大爬坡度评价，指标如表2-2所示：

<div style="display:flex; justify-content:center;">
    <span style="color:#666; font-size: 0.8rem;">表2-2 动力性能指标 </span>
</div>
<br/>

| 性能指标      | 符号（单位）      | 数值   |
|:---------|:-----------|----:|
| 最高车速      | <code class="language-text">$v_{max}$</code>    | `110`  |
| 75米直线加速时长 | <code class="language-text">$t_1$ (s)</code>   | `≤4`   |
| 最大加速度     | <code class="language-text">a (m/$s^2$)</code> | `10`   |





### 2.3 驱动电机参数匹配

根据《汽车理论》可知汽车的动力匹配需要考虑最高车速、加速度时间和最大爬坡度。电机性能要求达标后，选择尺寸较小且重量较轻的电机，能灵活布置赛车驱动系统。


#### 2.3.1 最高车速行驶下所需功率

求赛车在赛场为近乎水平的路面上以最高车速匀速行驶时所需要的功率，故赛车只受到滚动和空气阻力的双影响，不考虑加速阻力功率和坡度阻力功率，根据汽车功率平衡，赛车最高车速行驶下的峰值功率$P_{max1}$：

<!-- 公式(公式可以用收藏的网站，通过截图公式识别即可，不用充钱，多开几个无痕浏览轮着用就行。只用更改中间的$...$) -->
<div style="position: relative;">
<center> 

${P}_{\max {1}}=\frac {1} {\eta }\cdot \left ( {\frac {mgf} {3600}\cdot {v}_{\max}+\frac {{C}_{D}\cdot A} {76140}\cdot {v}_{\max}{}^{3}} \right )$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式2.1)
</span>
</div> 



<div class="fuhao_table"></div>

式中： 

|             |                |
|:------------------------------------|:---|     
| η | 传动效率 |
| 
| m | 整车质量(kg) |
| 
| g | 重力加速度(m/$s^2$)，取9.8m/$s^2$ |
| 
| A | 迎风面积($m^2$) |
| 
| $v_{max}$ | 最高车速(km/h) |
| 
| $C_D$ | 空气阻力系数 |
|
| f | 滚动阻力系数 |

计算可得赛车最高车速行驶下所需功率$P_{max1}=7.82kW$。




#### 2.3.2 (75m)加速时长所需功率

动态项目75m直线加速，可直接考察赛车最大动力，根据动力性能指标，75m直线加速需在4s内完成。赛车在加速过程中，受到滚动，空气和加速阻力，同样忽略坡度阻力，由赛车在加速过程中的动力学方程，赛车75m加速时长所需功率$P_{max2}$：

<div style="position: relative;">
<center> 

$P_{\max 2}=\frac{1}{\eta} \cdot\left(\frac{m g f}{3600} \cdot v+\frac{C_{D} A}{76140} \cdot v^{3}+\frac{\delta m v}{3600} \cdot \frac{d_{v}}{d_{t}}\right)$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式2.2)
</span>
</div> 



<div class="fuhao_table"></div>

式中： 

|             |                |
|:------------------------------------|:---|     
| v | 赛车的瞬时速度(km/h) |
| δ | 赛车旋转质量换算系数，取1.05 |
| $\frac{d_v}{d_t}$  | 赛车加速度($m^2$/s)。 |




可使用等效替换化简加速过程中车速与加速度的时间关系：

<div style="position: relative;">
<center> 

$v=v_{m} \cdot\left(\frac{t}{t_{m}}\right)^{x}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式2.3)
</span>
</div> 



<div class="fuhao_table"></div>

式中： 

|             |                |
|:------------------------------------|:---|     
| $v_m$ | 加速工况末速度(km/h) |
|
| $t_m$ | 加速时间(s)，x为拟合系数，通常取值为0.5。 |




联立公式（2.2）和（2.3）可得到：

<div style="position: relative;">
<center> 

$P_{\max 2}=\frac{v_{m}}{3600 \eta} \cdot\left\{m g f+\frac{C_{D} A}{21.15} \cdot v_{m}^{2}+\frac{\delta m}{3.6 \cdot d_{t}} v_{m} \cdot\left[1-\left(\frac{t_{m}-d_{t}}{t_{m}}\right)^{x}\right]\right\}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式2.4)
</span>
</div> 



<div class="fuhao_table"></div>

式中： 

|             |                |
|:------------------------------------|:---|     
| $d_t$ | 迭代过程的时长(s)，取值0.1s|

计算可得75m加速时长所需功率$P_{max2}=83.56kW$。






#### 2.3.3 确定电机型号及主要参数
诸多电机的对比中，永磁同步电机调速范围广、功率密度高、重量轻体积小、效率高、具有良好的可靠性，因此永磁同步电机更加适合用在纯电动赛车，能够满足赛车空间小，结构紧凑，动力要求高的需求。由于采取双电机驱动的布置形式，赛车每个驱动电机的峰值功率$P_{max}$：



<div style="position: relative;">
<center> 

$P_{\max } \geq \frac{\max \left(P_{\max 1}, P_{\max 2}\right)}{2}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式2.5)
</span>
</div> 



计算可得单个电机峰值功率$P_{max}≥41.78kW$。永磁同步电机的过载系数$λ=2-4$，取值为2，故电机额定功率$P_e≥26.21kW$。

通过市场调研和分析各车队使用的电机型号，最终选定一款性能、价格和几何尺寸都能满足条件的永磁同步电机：EMRAX×208（中压320Vdc），如下图2-5所示。电机参数可在EMRAX电机供应商提供的技术数据表中得到，主要参数如下表2-3：




<div style="display:flex; justify-content:center;">
    <span style="color:#666; font-size: 0.8rem;">表2-3 驱动电机主要参数表 </span>
</div>
<br/>

| 参数名称（单位）         | 数值           |
|:----------------|:------------|
| 额定 / 峰值功率（kW）    | `32 / 75`      |
| 额定 / 峰值转矩（N·m）   | `80 / 140`     |
| 额定 / 峰值转速（r/min） | `5000 / 6000`  |




<div style="display:flex; justify-content:center;">
    <div style="width:80%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/2-3.png"  />
        <span style="color:#666; font-size: 0.85rem;">图2-3 选定的电机型号EMRAX×208 </span>
    </div>
</div>







### 2.4 动力参数匹配
#### 2.4.1 计算最大传动比

①根据《汽车理论》中汽车最高车速与传动比的公式，减速机最大传动比$i_{\max a}$：

<div style="position: relative;">
<center> 

$i_{\max a} \leq \frac{0.377 \cdot r \cdot n_{\max }}{v_{\max }}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式2.6)
</span>
</div> 



<div class="fuhao_table"></div>

式中： 

|             |                |
|:------------------------------------|:---|     
| r | 轮胎滚动半径(m) |
| 
| $n_{max}$ | 电机的最高转速(r/min) |
| 
| $v_{max}$ | 赛车的最高车速(km/h) |

计算可得最大传动比$i_{\max ⁡a}$ = 4.7。




②针对赛车起步加速的工况，赛车的传动比过大会引起车轮打滑现象发生，使驱动力不能被充分利用，造成动力浪费，会影响赛车的加速性能。为了避免赛车发生滑移情况，需保证选取的传动比不能过大，让车轮的驱动力小于轮胎与地面的附着极限满足公式（2.7），将滑移率控制在稳定范围内。

当汽车起步时驱动力最大，由于惯性的作用，会出现轴荷转移的情况，赛车是后轮驱动的，故对后轴进行受力分析，如下图2-6。由于赛车是在专业赛事的平直车道上起步加速，因此公式（2.8）中忽略赛车加速过程中产生的空气升力和滚动阻力偶矩产生的部分。计算公式如下所示：

<div style="display:flex; justify-content:center;">
    <div style="width:80%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/2-4.png"  />
        <span style="color:#666; font-size: 0.85rem;">图2-4 赛车起步加速受力分析图 </span>
    </div>
</div>
<br/>




<div style="position: relative;">
<center> 

$F_t \leq {F_{z2} \cdot φ}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式2.7)
</span>
</div> 




<div style="position: relative;">
<center> 

$F_{z2} = {F_{zs2} + F_{zd2}}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式2.8)
</span>
</div> 




<div style="position: relative;">
<center> 

$F_{zs2} = \frac{m \cdot g \cdot a}{L}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式2.9)
</span>
</div> 




<div style="position: relative;">
<center> 

$F_{zd2} = {\frac{m \cdot h}{L} \cdot {\frac{d_u}{d_t}}}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式2.10)
</span>
</div> 




<div style="position: relative;">
<center> 

$F_{t}=\frac{2 \cdot T_{\max } \cdot i_{\max } \cdot \eta}{r}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式2.11)
</span>
</div> 






<div class="fuhao_table"></div>

式中： 

|             |                |
|:------------------------------------|:---|     
| $F_t$ | 后轮驱动力(N) |
| 
| $F_{z2}$ | 后轮地面反向作用力(N) |
| 
| φ | 地面附着系数 |
| 
| $F_{zs2}$ | 静态后轴荷的法向反作用力(N) |
| 
| $F_{zd2}$ | 动态分量(N) |
| 
| a | 质心到前轴的距离(mm) |
| 
| L | 轴距(mm) |
| 
| h | 质心高度(mm) |
| 
| du/dt | 最大加速度(m/s2) |
| 
| $T_{max}$ | 电机峰值扭矩(N·mm) |
| 
| η | 传动效率 |

计算可得$i_{\max ⁡b}=3.55$。





#### 2.4.2 计算最小传动比
对于纯电动赛车，最高车速设定是通过分析比赛项目来确定的，实际最高车速不小于设定值即可。故赛车最小传动比需满足赛车以最高车速在平直路面匀速行驶，即赛车的驱动力需等于各阻力之和。根据《汽车理论》中汽车行驶方程式$F_t$：


<div style="position: relative;">
<center> 

$F_{t}=F_{f}+F_{w}+F_{j}+F_{i}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式2.12)
</span>
</div> 




<div style="position: relative;">
<center> 

$F_{f}=m \cdot g \cdot f$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式2.13)
</span>
</div> 




<div style="position: relative;">
<center> 

$F_{w} = \frac{C_D \cdot A \cdot v^2}{21.15}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式2.14)
</span>
</div> 




<div style="position: relative;">
<center> 

$F_{j} = δ \cdot m \cdot  \frac{d_u}{d_t}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式2.15)
</span>
</div> 





<div class="fuhao_table"></div>

式中： 

|             |                |
|:------------------------------------|:---|     
| $F_f$ | 滚动阻力(N) |
| 
| $F_w$ | 空气阻力(N) |
| 
| $F_j$ | 加速阻力(N) |
| 
| $F_i$ | 坡度阻力(N) |
| 
| f | 滚动阻力系数，赛道是良好的沥青路面，f=0.01~0.018，取0.015 |
| 
| δ | 赛车的旋转质量系数，取1.05。 |

计算可得最小传动比$i_{\min ⁡c}=3.10$。







#### 2.4.3 确定最终传动比范围
根据测试可得电机转速在2000-3000r/min时输出的扭矩最大，且效率达到96%以上，如下图2-7所示。图中是EMRAX×208高压电机的曲线，低中压的曲线与高压的曲线几乎相同。当电机转速在2000-3000r/min时，电机的动力性能最好。

根据规则要求和其他车队往届的经验，动态项目赛事中的高速避障和耐久赛，需要保持车速在50km/h左右，为保证其时速下赛车仍具备足够的驱动力，需让电机转速维持在2000-3000r/min。

<div style="display:flex; justify-content:center;">
    <div style="width:100%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/2-5.png"  />
        <span style="color:#666; font-size: 0.85rem;">图2-5 EMRAX×208高压电机曲线图和效率图  </span>
    </div>
</div>
<br/>




<div style="position: relative;">
<center> 

${\frac{0.377 \cdot r \cdot n_1}{v}} \leq i_d \leq {\frac{0.377 \cdot r \cdot n_2}{v}}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式2.16)
</span>
</div> 






<div class="fuhao_table"></div>

式中： 

|             |                |
|:------------------------------------|:---|     
| $n_1$ | 电机转速为2000r/min |
| 
| $n_2$ | 电机转速为3000r/min |
| 
| v | 保持车速为50km/h。 |

计算可得传动比范围为：$3.45≤i_d≤5.17$。

联立前文最终确定传动比范围：$3.45≤i≤3.55$。
<br/><br/>



## 3 行星齿轮减速机的计算参数
### 3.1 行星齿轮传动分类

行星齿轮传动分类主要以两种

一是库式分类，可以分为2Z-X、3Z和Z-X-V三种基本传动类型，其中Z（K）为中心轮，X（H）为转臂，V为输出轴。通过这三种基本传动类型可以组成各种不同复杂的行星齿轮传动装置。

二是按齿轮啮合方式来分类，以机械工业部JB1799-76行星齿轮减速机为标准，N代表齿轮之间为内啮合，W代表齿轮之间为外啮合，G代表有两个中心轮，且有一个公共齿轮与其啮合。通过组合便能把行星齿轮传动类型分为NGW、NW、WW等。

综上所述，通过其他文献和《行星齿轮传动设计》书表1-1（下文简称《行星设计》），了解各类型行星齿轮传动的优缺点并比较，本文采用2Z-X（A）型行星齿轮传动方案（NGW型），该方案的传动简图如下图2-8，其传动比范围3~9，满足前文的速比范围。



<div style="display:flex; justify-content:center;">
    <div style="width:70%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/3-1.png"  />
        <span style="color:#666; font-size: 0.85rem;">图3-1 NGW型行星齿轮传动简图  </span>
    </div>
</div>
<br/>



主要组成构件有太阳轮a、内齿圈b、行星轮c和行星架H.

其原理是驱动电机提供动力，通过输入轴传递到太阳轮后，动力会分流到各个行星轮上，而行星轮与行星架连接在一起，同时内齿圈固定在减速机的壳体上，约束系统的运动自由度，因此行星轮绕太阳轮公转的同时，行星架也会被带动自转，这样动力便传递到行星架，最后由行星架输出动力给半轴到车轮，驱动赛车能够行驶，起到降速增扭的作用。

此传动结构方案的技术特点是传动效率高，并且结构简单，质量轻和体积小。
<br/><br/>



### 3.2 配齿计算
#### 3.2.1 传动比条件
传动比条件是要保证行星系统中的各齿轮的齿数满足所给定的传动比：


<div style="position: relative;">
<center> 

$i_{p}=i_{ax}^{b}=1+\frac{z_{b}}{z_{a}}=1+p$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.1)
</span>
</div> 




<div class="fuhao_table"></div>

式中： 

|             |                |
|:------------------------------------|:---|     
| $i_p$ | 传动比，根据前文初步选定$i_p=3.55$ |
| 
| $i_{ax}^b$ | 上标为固定，下标前为输入，后为输出，即太阳轮a输入，转臂x输出，内齿圈b固定 |
| 
| $z_a$ | 太阳轮齿数，可参考《行星设计》表3-2，初设$z_a=22$ |
| 
| $z_b$ | 内齿圈齿数 |
| 
| p | 行星齿轮传动特性参数 |

计算可得$p=2.55$，$z_b=56$





#### 3.2.2 同心条件
同心条件的齿轮传动必须是渐开线圆柱齿轮，需满足不同的中心轮与行星轮之间的实际中心距是相等的，对于非变位的啮合齿轮传动：

<div style="position: relative;">
<center> 

$z_a+2z_c=z_b$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.2)
</span>
</div> 

计算可得$z_c=17$。






#### 3.2.3 安装条件
行星齿轮传动采用多个行星轮，目的是提高承载能力，抵消齿轮啮合时的径向力。安装条件是让$n_p$个行星轮安装在转臂x上，并保证均匀分布在中心轮的周围，与两个中心轮a和b相互啮合，不会发生错位的现象：

<div style="position: relative;">
<center> 

$\frac{z_a+z_b}{n_p}=C(整数)$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.3)
</span>
</div> 


<div class="fuhao_table"></div>

式中： 

|             |                |
|:------------------------------------|:---|     
|$n_p$ | 行星轮轮数，本文设计的行星轮数$n_p=3$ |

计算可得$\frac{z_a+z_b}{n_p}=26$，故满足安装条件。






#### 3.2.4 邻接条件
设计行星齿轮传动时，需要在太阳轮a和内齿圈b之间均匀对称布置$n_p$个行星轮，其目的是功率分流，提高承载能力，减少结构尺寸，保证结构紧凑。但是要保证行星轮之间不会相互碰撞，需满足不等式条件:


<div style="position: relative;">
<center> 

$2r_{a(c)}<L_c$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.4.1)
</span>
</div> 




<div style="position: relative;">
<center> 

$d_{a(c)}<2a_{a-c} \cdot sin{\frac{π}{n_p}}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.4.2)
</span>
</div> 





<div class="fuhao_table"></div>

式中：

|             |                |
|:------------------------------------|:---|
| $r_{a(c)}$ | 行星轮c的齿顶圆半径 |
| 
| $d_{a(c)}$ | 行星轮c的齿顶圆直径 |
| 
| $L_c$ | 两行星轮中心之间的距离，$L_c= {a_{a-c} \cdot sin60°}$ |
| 
| $a_{a-c}$ | 太阳轮到行星轮的中心距。 |

可得: $2 \cdot {\frac{38}{2}} mm < 39mm \cdot {\frac{\sqrt{3}}{2}} \cdot 2$，$38mm < 39mm \cdot {\frac{\sqrt{3}}{2}} \cdot 2$，满足邻接条件。





<div style="display:flex; justify-content:center;">
    <span style="color:#666; font-size: 0.8rem;">表3-1 各齿轮齿数和行星齿轮数 </span>
</div>
<br/>

| 基本传动构件 | 符号  | 个数  |
|:------|:---|---:|
| 太阳轮a   | $z_a$(齿数) | `22`  |
| 内齿圈b   | $z_b$(齿数) | `56`  |
| 行星轮c   | $z_c$(齿数) | `17`  |
| 行星轮c   | $n_p$(轮数) | `3`   |
<br/>







### 3.3 行星齿轮几何尺寸参数计算
#### 3.3.1 确定齿轮类型、材料、热处理工艺、精度等级
齿轮材料和热处理方式直接影响齿轮的承载能力和使用寿命，参考《行星设计》表7-3和文献，选择如下表3-2。



<div style="display:flex; justify-content:center;">
    <span style="color:#666; font-size: 0.8rem;">表3-2 齿轮类型、材料、热处理工艺、力学性能和精度等级 </span>
</div>
<br/>

|      | 太阳轮a      | 内齿圈b         | 行星轮c       |
|:----|:---------:|:------------:|:----------:|
| 类型   | 直齿圆柱齿轮    | 直齿圆柱齿轮       | 直齿圆柱齿轮     |
| 材料   | `20CrMnTi`  | `40Cr`         | `20CrMnTi`   |
| 热处理  | 渗碳淬火      | 调质（即淬火后高温回火） | 渗碳淬火       |
| 硬度   | `56-62 HRC` | `241-286 HB`   | `56-62 HRC`  |
| 接触强度 | `1500 MPa`  | `735 MPa`      | `1500 MPa`   |
| 弯曲强度 | `450 MPa`   | `300 MPa`      | `315 MPa`    |
| 加工精度 | 7级        | 7级           | 7级         |



&emsp;&emsp;其中太阳轮a和行星轮c选择硬齿面材料，经过热处理工艺渗碳淬火后，齿面硬度很高、接触强度很高、耐磨性能好、承载能力够大，能获得高精度的齿轮；而内齿圈b选择软齿面材料，承载能力不需要很高，经过热处理工艺调质处理后，有较高的强度和硬度以及较好的韧性。根据《行星设计》表5-4和5-5，通用减速器精度范围一般在6~9。







#### 3.3.2 计算齿轮模数
按《行星设计》P184中两种方法同时计算，取较大值并向上取数，其中啮合齿轮副为太阳轮（大齿轮）和行星轮（小齿轮）。

①根据按齿面接触强度初算小齿轮分圆直径$d_1'$。


<div style="position: relative;">
<center> 

$d_{1}^{\prime}=K_{d} \sqrt[3]{\frac{T_{1} \cdot K_{A} \cdot K_{H \Sigma} \cdot K_{H p}}{\Phi_{d} \cdot \sigma_{H l i m}^{2}} \cdot \frac{u \pm 1}{u}}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.5)
</span>
</div> 



<div style="position: relative;">
<center> 

$T_1=\frac{T_a}{u\cdot{n_p}}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.6)
</span>
</div> 



<div style="position: relative;">
<center> 

$m'=\frac{d_1'}{z}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.7)
</span>
</div> 





<div class="fuhao_table"></div>

式中： 

|             |                |
|:------------------------------------|:---|     
| $K_d$ | 算式系数，齿轮副的材料都为钢，进行配对时直齿轮传动$K_d=768$； |
| 
| $T_1$ | 啮合齿轮副中小齿轮的名义转矩（N·m），根据《行星设计》P208所示，当$z_c< z_a$时，按公式（3.6）计算 |
|  
| $T_a$ | 太阳轮传递转矩（N·m），这里为电机额定转矩，则$T_a=80N·m$； |
|  
| u | 齿数比，大齿轮与小齿轮齿数比，$u=z_a/z_c =1.29$； |
|  
| $K_A$ | 使用系数，根据《行星设计》P187表7-7，取$K_A=1$； |
|  
| $K_{H∑}$ | 综合系数，根据《行星设计》P185表7-5，取$K_{H∑}=2.4$； |
|  
| $K_{Hp}$ | 计算接触强度的行星轮间载荷分布不均匀系数，根据《行星设计》P221表8-1，本文设计内齿圈b为浮动构件，取$K_{Hp}=1.15$； |
|  
| $Φ_d$ | 小齿轮齿宽系数，根据《行星设计》P185表7-6，大齿轮齿宽系数为$Φ_{da}≤0.75$，取0.75，则小齿轮齿宽系数$Φ_{dc}={\frac{z_a}{z_c}} \cdot {Φ_{da}}=0.97$；
|  
| $σ_{Hlim}$ | 试验齿轮的接触疲劳极限（$N/mm^2$），太阳轮和行星轮的材料和热处理方式相同，都为渗碳淬火钢，如下图3-2所示，图中的ML代表最低要求的质量，MQ为中，ME为高，MX为特殊，本文选MQ曲线，$σ_{Hlim}=1500MPa$。 |
  
计算可得小齿轮分度圆直径$d_1'=27.56mm$，模数$m'=1.62mm$。






<div style="display:flex; justify-content:space-between;">
    <div style="width:40%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/3-2.1.png"  />
        <span style="color:#666; font-size: 0.8rem; display:inline-flex; align-items: center;">
            图3-2(1) 调质处理的 &nbsp;
            <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/3-2_x1.png" height="20px">
        </span>
    </div>
    <div style="width:40%; text-align:center; margin-top: 0.5rem">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/3-2.2.png"  />
        <span  style="color:#666; font-size: 0.8rem; display:inline-flex; align-items: center;">
            图3-2(2) 渗碳淬火钢的&nbsp;
            <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/3-2_x1.png" height="20px">
        </span>
    </div>
</div>
<br/><br/>






②按齿根弯曲强度初算齿轮模数m''：


<div style="position: relative;">
<center> 

$m^{\prime \prime}=K_{m} \sqrt[3]{\frac{T_{1} \cdot K_{A} \cdot K_{F \Sigma} \cdot K_{F p} \cdot Y_{F a 1}}{\Phi_{d} \cdot z_{c}^{2} \cdot \sigma_{F l i m}}}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.8)
</span>
</div> 



<div style="position: relative;">
<center> 

$K_{Fp}=1+1.5\cdot(K_{Hp}-1)$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.9)
</span>
</div> 





<div class="fuhao_table"></div>

式中： 

|             |                |
|:------------------------------------|:---|     
| $K_m$ | 算式系数，圆柱直齿轮传动$K_m=12.1$ |
| 
| $K_{F∑}$ | 综合系数，根据《行星设计》P185表7-5，取$K_{F∑}=2.2$ |
|  
| $K_{Fp}$ | 计算弯曲强度的行星轮间载荷分布不均匀系数，根据《行星设计》P221，按公式（3.9）如上所示，$K_{Fp}=1.23$ |
|  
| $Y_{Fa1}$ | 小齿轮齿形系数，如下图3-3所示，图中变位系数x本文设计为0，横坐标$z_n$为当量齿数，对于直齿轮$z_n=z$，故$Y_{Fa1}=2.93$ |
|  
| $Y_{Fa2}$ | 大齿轮齿形系数，如下图3-3所示，$Y_{Fa2}=2.75$ |
|  
| $σ_{Flim}$ | 试验齿轮的弯曲疲劳极限（$N/mm^2$），如下图3-4所示。需要注意图3-3中选取的$σ_{Flim}$值，只适用于轮齿单向弯曲的受载状况，对于行星轮是受对双向弯曲的齿轮来说，应才乘0.7倍。则$σ_{Flim1}=450*0.7=315MPa$，$0.7\cdotσ_{Flim2}\cdot{\frac{Y_{Fa1}}{Y_{Fa2}}} =335.62MPa$，取前两者的最小值，则$σ_{Flim}=315MPa$。 |
  
计算可得齿轮模数$m''=1.48mm$。
 



<div style="display:flex; justify-content:space-around;">
    <div style="width:45%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/3-3.1.png"  />
        <span style="color:#666; font-size: 0.8rem; display:inline-flex; align-items: center;">
            图3-3(1) 齿形系数 &nbsp;
            <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/3-3_x1.png" height="21px">
        </span>
    </div>
    <div style="width:43%; text-align:center; margin-top: 0.5rem">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/3-3.2.png"  />
        <span  style="color:#666; font-size: 0.8rem; display:inline-flex; align-items: center;">
            图3-3(2) 应力修正系数&nbsp;
            <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/3-3_x2.png" height="21px">
        </span>
    </div>
</div>
<br/><br/>




<div style="display:flex; justify-content:space-around;">
    <div style="width:45%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/3-4.1.png"  />
        <span style="color:#666; font-size: 0.8rem; display:inline-flex; align-items: center;">
            图3-4(1) 调质处理的 &nbsp;
            <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/3-4_x1.png" height="22px">
        </span>
    </div>
    <div style="width:44%; text-align:center; margin-top: 0.5rem">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/3-4.2.png"  />
        <span  style="color:#666; font-size: 0.8rem; display:inline-flex; align-items: center;">
            图3-4(2) 调质处理的&nbsp;
            <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/3-4_x1.png" height="22px">
        </span>
    </div>
</div>
<br/><br/>


综上取最大值向上取整，并以下表3-3为标准，最终确定齿轮模数$m=2mm$。






<div style="display:flex; justify-content:center;">
    <span style="color:#666; font-size: 0.8rem;">表3-3 齿轮标准模数m（单位：mm）（GB/T 1357-2008） </span>
</div>
<br/>

| 第一系列 | `1`     | `1.25`  | `1.5`  | `2`    | `2.5`  | `3`   | `4`   | `5`   | `6`    |
|:----|:-----|:-----|:----|:----|:----|:---|:---|:---|:----|
| 第二系列 | `1.125` | `1.375` | `1.75` | `2.25` | `2.75` | `3.5` | `4.5` | `5.5` | `6.5`  |
<br/>










#### 3.3.3行星减速机齿轮的尺寸计算
行星齿轮传动的尺寸计算，需分解成太阳轮a-行星轮c的外啮合齿轮副，内齿圈b和行星轮c的内啮合齿轮副。具体参数计算如表3-4：

<div style="display:flex; justify-content:center;">
    <span style="color:#666; font-size: 0.8rem;">表3-4 行星齿轮传动的几何尺寸计算 </span>
</div>
<br/>

<!-- 小表格 -->
<div class="small_table"></div>

| 参数名称         | 说明/计算公式                                                                                                                                                                                              | 结果数值                                                                   |
|:------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------|
| 模数m          | -                                                                                                                                                                                                    | $m=2mm$                                                                |
| 分度圆压力角α      | -                                                                                                                                                                                                    | $α=20° $                                                               |
| 分度圆直径d       | $d=m·z$                                                                                                                                                                                              | $d_{(a)}=44mm$ <br/>$d_{(b)}=112mm$ <br/>$d_{(c)}=34mm$              |
| 齿顶高系数$h_a^*$ | -                                                                                                                                                                                                    | $h_a^*=1$                                                              |
| 顶隙系数$c^*$    | -                                                                                                                                                                                                    | $c^*=1$                                                                |
| 齿顶高$h_a$     | 外啮合：$h_{a a}=h_{a c}=m \cdot h_a^* $ <br/> 内啮合：$h_{a b}=(1-\frac{7.55}{z_b}) \cdot m$                                                                                                             | $h_{a(a)}=2mm$ <br/> $h_{a(b)}=1.73mm$ <br/> $h_{a(c)}=2mm$            |
| 齿根高$h_f$     | $h_f=(h_a^*+c^* ) \cdot m$                                                                                                                                                                           | $h_{f(a)}=2.5mm$ <br/> $h_{f(b)}=2.5mm$ <br/> $h_{f(c)}=2.5mm$         |
| 全齿高h         | $h=h_a+h_f$                                                                                                                                                                                          | $h_{(a)}=4.5mm$ <br/> $h_{(b)}=4.23mm$ <br/> $h_{(c)}=4.5mm$           |
| 齿顶圆直径$d_a$   | $d_{a a}=d_a+2h_{a a}$ <br/> $d_{a b}=d_b+2h_{a b}$ <br/> $d_{a c}=d_c-2h_{a c}$                                                                                                               | $d_{a(a)}=48mm$ <br/> $d_{a(b)}=108.54mm$ <br/> $d_{a(c)}=38mm$        |
| 齿根圆直径$d_f$   | $d_{f a}=d_a-2h_{f a}$ <br/> $d_{f b}=d_b-2h_{f b}$ <br/> $d_{f c}=d_c+2h_{f c}$                                                                                                              | $d_{f(a)}=39mm$ <br/> $d_{f(b)}=117mm$ <br/> $d_{f(c)}=29mm$           |
| 基圆直径$d_b$    | $d_b= d \cdot cosα$                                                                                                                                                                                  | $d_{b(a)}=41.35mm$ <br/> $d_{b(b)}=105.25mm$ <br/> $d_{b(c)}=31.95mm$  |
| 中心距a         | $a=\frac{d_a+d_c}{2}=\frac{d_b-d_c}{2}$                                                                                                                                                               | $a=39mm$                                                               |                                     
| 齿顶压力角$α_a$   | $α_a=\frac{arccos d_b}{d_a}$                                                                                                                                                                         | $α_{a(a)}=30.53°$ <br/> $α_{a(b)}=14.15°$ <br/> $α_{a(c)}=32.78°$      |
| 端面重复度$ε_a$   | $ε_{a(a-c)}={\frac{1}{2π}} \cdot {[z_1 \cdot {(tanα_{a(c)}-tanα)} + z_2 \cdot {(tanα_{a(a)}-tanα)}]}$  <br/> $ε_{a(b-c)}={\frac{1}{2π}} \cdot {[z_1 \cdot {(tanα_{a(c)}-tanα)} - z_2 \cdot {(tanα_{a(b)}-tanα)}]}$  | $ε_{a(a-c)}=1.55$ <br/> $ε_{a(b-c)}=1.75$                              |
| 纵向重合度$ε_β$   | $ε_β=0$                                                                                                                                                                                              | $ε_β=0$                                                                |
| 总重合度$ε_γ$    | $ε_γ=ε_a+ε_β$                                                                                                                                                                                        | $ε_{γ(a-c)}=1.55$ <br/> $ε_{γ(b-c)}=1.75 $                             |
<br/>





### 3.4齿轮传动效率的计算
行星齿轮的传动效率决定性能好坏。齿轮的传动效率与功率损失有关，功率损失主要有三种：啮合齿轮副中的摩擦损失$η_m$（啮合损失），轴承摩擦损失$η_n$和液力损失$η_s$，其中液力损失$η_s$比啮合损失$η_m$要小很多，可忽略不计。

根据《行星设计》P150表6-1中，对于2Z-X（A）型行星齿轮传动效率$η_{ax}^b$：


<div style="position: relative;">
<center> 

$\eta_{a x}^{b}=1-\frac{p}{p+1} \cdot \psi^{x}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.10)
</span>
</div> 



<div style="position: relative;">
<center> 

$p=\frac{z_b}{z_a}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.11)
</span>
</div> 



<div style="position: relative;">
<center> 

$\psi^{x}=\psi_{m a}^{x}+\psi_{m b}^{x}+\psi_{n}^{x}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.12)
</span>
</div> 



<div style="position: relative;">
<center> 

$\psi_{m a}^{x}=2 \pi f_{m} \cdot\left(\frac{1}{z_{c}}+\frac{1}{z_{a}}\right) \cdot\left(1-\varepsilon_{a(a-c)}+0.5 \varepsilon_{a(a-c)}^{2}\right) \cdot k_{\varepsilon}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.13)
</span>
</div> 



<div style="position: relative;">
<center> 

$\psi_{m b}^{x}=2 \pi f_{m} \cdot\left(\frac{1}{z_{c}}-\frac{1}{z_{b}}\right) \cdot\left(1-\varepsilon_{a(b-c)}+0.5 \varepsilon_{a(b-c)}^{2}\right) \cdot k_{\varepsilon}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.14)
</span>
</div> 





<div class="fuhao_table"></div>

式中： 

|             |                |
|:------------------------------------|:---|     
| $ψ^x$ | 转化机构的功率损失系数 |
| 
| $f_m$ | 啮合摩擦系数，根据《行星设计》P150中，一般在0.6~0.1，取$f_m=1$ |
| 
| $k_ε$ | 系数，对于直齿轮传动，$k_ε=1$ |
| 
| $ψ_n^x$ | 轴承损失系数，可通过计算公式求得，但误差过大，故忽略不计 |
| 
| $ψ_{ma}^x$ | 转化机构中太阳轮a与行星轮c之间的啮合损失，$ψ_{ma}^x=0.04$ |
| 
| $ψ_{mb}^x$ | 转化机构中内齿圈b与行星轮c之间的啮合损失，$ψ_{ma}^x=0.02$。 |

计算可得传动效率$η_{ax}^b=0.98$。故该行星齿轮传动能满足短期间断工作方式的要求。
<br/><br/>











### 3.5 齿轮强度校核
#### 3.5.1 行星齿轮传动的受力分析
对于2Z-X（A）型行星传动，由于行星轮对中心轮呈均匀对称分布，故各基本构件对传动主轴上的轴承所作用的总径向力$F_r$为零。且本文采用直齿圆柱齿轮，因此无轴向力$F_a$。方便起见，用F表示切向力$F_t$，根据《行星设计》P169，受力分析如下图3-5所示。



<div style="display:flex; justify-content:center;">
    <div style="width:100%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/3-5.png"  />
        <span style="color:#666; font-size: 0.85rem;">图3-5 受力分析图 </span>
    </div>
</div>
<br/>


①太阳轮a上所受的切向力：


<div style="position: relative;">
<center> 

$F_{c \rightarrow a}=\frac{2000 \cdot T_{1}}{d_{a}}=\frac{2000 \cdot T_{a}}{n_{p} \cdot d_{a} \cdot u}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.15)
</span>
</div> 



<div class="fuhao_table"></div>

式中:

|             |                |
|:------------------------------------|:---|
| $F_{c→a}$ | 行星轮c作用于中心轮a的切向力（N）|
| 
| $T_1$ | 太阳轮a在每个功率分流上所承受的输入转矩（N·m）|
| 
| $d_a$ | 太阳轮a的节圆直径（mm）|
| 
| $T_a$ | 太阳轮a传动的转矩（N·m），应考虑电机的峰值转矩，故$T_a=140N·m$|
| 
| u | 齿数比，$u=z_a/z_c$ |


计算可得行星轮c作用于中心轮a的切向力：F_(c→a)=2121.21N。




②行星轮c上所受的切向力：

<div style="position: relative;">
<center> 

$F_{a \rightarrow c}=-F_{c \rightarrow a}=-\frac{2000 \cdot T_{a}}{n_{p} \cdot d_{a} \cdot u}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.16)
</span>
</div> 



<div style="position: relative;">
<center> 

$F_{b \rightarrow c}=F_{a \rightarrow c}=-\frac{2000 \cdot T_{a}}{n_{p} \cdot d_{a} \cdot u}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.17)
</span>
</div> 



<div style="position: relative;">
<center> 

$F_{x \rightarrow c}=-2F_{a \rightarrow c}=\frac{4000 \cdot T_{a}}{n_{p} \cdot d_{a} \cdot u}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.18)
</span>
</div> 



计算可得：

中心轮a作用于行星轮c的切向力：$F_{a→c}=-2121.21N$

内齿圈b作用于行星轮c的切向力：$F_{b→c}=-2121.21N$

转臂x作用于行星轮c的切向力：$F_{x→c}=4242.42N$





③内齿圈b上所受的切向力：

<div style="position: relative;">
<center> 

$F_{c \rightarrow b}=-F_{b \rightarrow c}=\frac{2000 \cdot T_{a}}{n_{p} \cdot d_{a} \cdot u}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.19)
</span>
</div> 


计算可得行星轮c作用于内齿圈b的切向力：$F_{c→a}=2121.21N$。




④转臂x上所受的切向力：

<div style="position: relative;">
<center> 

$F_{c \rightarrow x}=-F_{x \rightarrow c}=-\frac{4000 \cdot T_{a}}{n_{p} \cdot d_{a} \cdot u}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.20)
</span>
</div> 


计算可得行星轮c作用于转臂x的切向力：$F_{c→x}=-4242.42N$。




⑤转臂x上所受的力矩：

<div style="position: relative;">
<center> 

$T_{a}=-\frac{1}{1+\frac{z_{a}}{z_{b}}} \cdot T_{x}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.21)
</span>
</div> 


计算可得转臂x上所受的力矩：$T_x=-496.36N·m$。




⑥内齿圈b上所受的力矩：

<div style="position: relative;">
<center> 

$T_{b}=-\frac{\frac{z_a}{z_b}}{1+\frac{z_{a}}{z_{b}}} \cdot T_{x}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(公式3.22)
</span>
</div> 


计算可得内齿圈b上所受的力矩：$T_x=356.36N·m$。










#### 3.5.2 行星齿轮传动的强度校核
赛车工作时间很少且间断进行，对于具备短期间断工作方式的齿轮传动，不需要进行齿面接触强度的校核计算，只用进行齿根弯曲强度校核计算，对不同的啮合齿轮副需要分别进行强度校核。以下强度校核方式根据《行星设计》P198所示：

**对太阳轮-行星轮（a-c）齿轮副进行强度校核:**

①分别计算太阳轮a和行星轮c的齿根应力$σ_F$：


<div style="position: relative;">
<center> 

$\sigma_{F(a)}=\frac{F_{a \rightarrow c}}{b_{(a)} \cdot m} \cdot Y_{F a(a)} \cdot Y_{S a(a)} \cdot Y_{\varepsilon} \cdot Y_{\beta} \cdot K_{A} \cdot K_{V} \cdot K_{F \beta} \cdot K_{F \alpha(a)} \cdot K_{F p}
$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(3.23)
</span>
</div> 



<div style="position: relative;">
<center> 

$\sigma_{F(c)}=\frac{F_{c \rightarrow a}}{b_{(c)} \cdot m} \cdot Y_{F a(c)} \cdot Y_{S a(c)} \cdot Y_{\varepsilon} \cdot Y_{\beta} \cdot K_{A} \cdot K_{V} \cdot K_{F \beta} \cdot K_{F \alpha(c)} \cdot K_{F p}
$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(3.24)
</span>
</div> 



<div style="position: relative;">
<center> 

$K_{V}=\left[\frac{A}{A+\sqrt{200 \cdot v^{x}}}\right]^{-B}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(3.25)
</span>
</div> 



<div style="position: relative;">
<center> 

$Y_{\varepsilon}=0.25+\frac{0.75}{\varepsilon_{a(a-c)}}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(3.26)
</span>
</div> 





<!-- 符号表格 -->
<div class="fuhao_table"></div>

式中： 

|             |                |
|:------------------------------------|:---|     
| $K_A$    |  使用系数，《行星设计》P187表7-7取$K_A=1$|
| |
| $K_V$    |  动载系数，《行星设计》P188，公式（3.25）C为精度7，<br/> $A=50+56·(1-B)$、$B=0.25 \cdot (C-5)^{0.667}$，$v^x≤\frac{{A| |+(14-C)}^2}{200}$，<br/> 可得$K_V=1.34$|
| |
| $K_{Fβ}$    |  齿向载荷分布系数，《行星设计》P190，$\frac{b_{(b)}}{d_{(c)}} ≤1$，故$K_{Fβ}=1$ |
| |
| $K_{Fα}$    |  齿间载荷分布系数，《行星设计》P190表7-9太阳轮a和行星轮c都属于硬齿面直齿轮，精度等级7，故$K_{Fα(a)}=K_{Fα(c)}=1.1$ |
| |
| $K_{Fp}$    |  计算弯曲强度的行星轮间载荷分布不均匀系数，根据《行星设计》P221按前文公式（3.9），故$K_Fp=1.23$ |
| |
| $Y_{Fa}$    |  齿形系数，如前文图3-3，选取$Y_{Fa(a)}=2.75$，$Y_{Fa(c)}=2.93$ |
| |
| $Y_{Sa}$    |  应力修正系数，如前文图3-3选取方式和齿形系数$Y_Fa$相同，故选取$Y_{Sa(a)}=1.557$，$Y_{Sa(c)}=1.525$ |
| |
| $Y_ε$    |  重合度系数，按公式（3.26）计算得$Y_ε=0.73$ |
| |
| $Y_β$    |  螺旋角系数，《行星设计》P202图7-25直齿轮传动纵向重合度$ε_β=0$，故$Y_β=1$ |
| |
| b    |  齿宽（mm），太阳轮齿宽$b_{(a)}=25.5mm$，行星轮齿宽$b_{(c)}=24.5mm$。计算可得太阳轮a的齿根应力$σ_{F(a)}=235.91MPa$，行星轮c的根应力$σ_{F(c)}=256.23MPa$|


计算可得太阳轮a的齿根应力$σ_{F(a)}=235.91MPa$，行星轮c的齿根应力$σ_{F(c)}=256.23MPa$。




②分别计算太阳轮a和行星轮c的许用齿根应力$σ_{FP}$：


<div style="position: relative;">
<center> 

$\sigma_{F P(a)}=\frac{\sigma_{F l i m(a)} \cdot Y_{S T} \cdot Y_{N T(a)}}{S_{F \min }} \cdot Y_{\delta r e l T} \cdot Y_{\text {RrelT }} \cdot Y_{X}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(3.27)
</span>
</div> 





<div style="position: relative;">
<center> 

$\sigma_{F P(c)}=\frac{\sigma_{F l i m(c)} \cdot Y_{S T} \cdot Y_{N T(c)}}{S_{F \min }} \cdot Y_{\delta r e l T} \cdot Y_{\text {RrelT }} \cdot Y_{X}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(3.28)
</span>
</div> 


<div class="fuhao_table"></div>

式中： 

|             |                |
|:------------------------------------|:---| 
| $σ_{Flim}$ | 齿根弯曲疲劳极限（MPa），前文图3-4太阳轮$σ_{Flim(a)}=450MPa$。行星轮是受对双向弯曲的齿轮需乘0.7倍，故$σ_{Flim(c)}=315MPa$ |
| 
| $Y_{ST}$ | 应力修正系数，取$Y_{ST}=2$ |
| 
| $Y_{NT}$ | 寿命系数，《行星设计》P204表7-16太阳轮a和行星轮c材料及热处理相同，故$Y_{NT(a)}=Y_{NT(c)}=2.5$ |
| 
| $Y_X$ | 尺寸系数，《行星设计》P206图7-32取$Y_X=1$ |
| 
| $Y_{δrelT}$ | 相对齿根圆角敏感系数，《行星设计》P207近似为$Y_{δrelT}=1$ |
| 
| $Y_{RrelT}$ | 相对齿根表面状况系数，《行星设计》P208表7-18$Y_{RrelT}=1.12$ |
| 
| $S_{Fmin}$ | 最小安全系数，《行星设计》P194表7-11选择一般可靠性要求，$S_{Fmin}=1.25$ |


计算可得，太阳轮a的许用齿根应力$σ_{FP(a)}=2016MPa$，行星轮c的许用齿根应力$σ_{FP(c)}=1411.2MPa$。

综上，太阳轮$σ_{F(a)}=235.91MPa ≤ 2016MPa=σ_{FP(a)}$；行星轮$σ_{F(c)}=256.23MPa ≤ 1411.2MPa = σ_{FP(c)}$，故a-c齿轮副满足齿根弯曲强度条件。





③分别计算太阳轮a和行星轮c的安全系数$S_F$：



<div style="position: relative;">
<center> 

$S_{F(a)}=\frac{\sigma_{F l i m}(a)}{\sigma_{F(a)}} \cdot Y_{N T(a)} \cdot Y_{\delta r e l T} \cdot Y_{\text {RrelT }} \cdot Y_{X}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(3.29)
</span>
</div> 





<div style="position: relative;">
<center> 

$S_{F(c)}=\frac{\sigma_{F l i m}(c)}{\sigma_{F(c)}} \cdot Y_{N T(c)} \cdot Y_{\delta r e l T} \cdot Y_{\text {RrelT }} \cdot Y_{X}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(3.30)
</span>
</div> 



计算可得，太阳轮a安全系数$S_{F(a)}=5.34$，行星轮c安全系数$σ_{FP(c)}=3.44$，都满足$S_F≥S_{Fmin}=1.25$，故a-c齿轮副满足齿根弯曲强度条件。
<br/><br/>



**对内齿圈-行星轮（b-c）齿轮副进行强度校核：**

①分别计算内齿圈b和行星轮c的齿根应力σ_F：



<div style="position: relative;">
<center> 

$\sigma_{F(b)}=\frac{F_{b \rightarrow c}}{b_{(b)} \cdot m} \cdot Y_{F a(b)} \cdot Y_{S a(b)} \cdot Y_{\varepsilon} \cdot Y_{\beta} \cdot K_{A} \cdot K_{V} \cdot K_{F \beta} \cdot K_{F \alpha(b)} \cdot K_{F p}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(3.31)
</span>
</div> 




<div style="position: relative;">
<center> 

$\sigma_{F(c)}=\frac{F_{c \rightarrow b}}{b_{(c)} \cdot m} \cdot Y_{F a(c)} \cdot Y_{S a(c)} \cdot Y_{\varepsilon} \cdot Y_{\beta} \cdot K_{A} \cdot K_{V} \cdot K_{F \beta} \cdot K_{F \alpha(c)} \cdot K_{F p}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(3.32)
</span>
</div> 





<div style="position: relative;">
<center> 

$
Y_{\varepsilon}=0.25+\frac{0.75}{\varepsilon_{a(b-c)}}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(3.33)
</span>
</div> 





<div class="fuhao_table"></div>

式中： 

|             |                |
|:------------------------------------|:---|     
| $K_{Fα}$ | 齿间载荷分布系数，《行星设计》P190表7-9内齿圈b属于非硬齿面直齿轮，精度等级7，故$K_{Fα(b)}=1$ |
| 
| $Y_{Fa}$ | 齿形系数，《行星设计》P200内齿圈的齿形系数可近似按齿条计算，故选取$Y_{Fa(b)}=2.053$ |
| 
| $Y_{Sa}$ | 应力修正系数，《行星设计》P201内齿圈的齿形系数可近似按齿条计算，故选取$Y_{Sa(b)}=2.65$ |



计算可得，内齿圈b的齿根应力$σ_{F(b)}=251.35MPa$，行星轮c的齿根应力$σ_{F(c)}=227.07MPa$。





②分别计算内齿圈b和行星轮c的许用齿根应力$σ_{FP}$：


<div style="position: relative;">
<center> 

$\sigma_{F P(b)}=\frac{\sigma_{F l i m(b)} \cdot Y_{S T} \cdot Y_{N T(b)}}{S_{F \min }} \cdot Y_{\delta r e l T} \cdot Y_{R r e l T} \cdot Y_{X}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(3.34)
</span>
</div> 




<div style="position: relative;">
<center> 

$\sigma_{F P(c)}=\frac{\sigma_{F l i m(c)} \cdot Y_{S T} \cdot Y_{N T(c)}}{S_{F \min }} \cdot Y_{\delta r e l T} \cdot Y_{\text {RrelT }} \cdot Y_{X}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(3.35)
</span>
</div> 






<div class="fuhao_table"></div>

式中： 

|             |                |
|:------------------------------------|:---|     
| $σ_{Flim}$ | 齿根弯曲疲劳极限（MPa），前文图3-4内齿圈$σ_{Flim(b)}=300MPa$ |
| 
| $Y_{NT}$ | 寿命系数，《行星设计》P204表7-16取$Y_{NT}=2.5$ |




计算可得，内齿圈b的许用齿根应力$σ_{FP(b)}=1344MPa$，行星轮c的许用齿根应力$σ_{FP(c)}=1411.2MPa$。

综上，内齿圈：$σ_{F(b)}=251.35MPa≤1344MPa=σ_{FP(b)}$；行星轮：$σ_{F(c)}=227.07MPa≤1411.2MPa=σ_{FP(c)}$。故b-c齿轮副满足齿根弯曲强度条件。




③分别计算内齿圈b和行星轮c的安全系数$S_F$：



<div style="position: relative;">
<center> 

$S_{F(b)}=\frac{\sigma_{F l i m}(b)}{\sigma_{F(b)}} \cdot Y_{N T(b)} \cdot Y_{\delta r e l T} \cdot Y_{\text {RrelT }} \cdot Y_{X}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(3.36)
</span>
</div> 




<!-- 公式 -->
<div style="position: relative;">
<center> 

$S_{F(c)}=\frac{\sigma_{F l i m}(c)}{\sigma_{F(c)}} \cdot Y_{N T(c)} \cdot Y_{\delta r e l T} \cdot Y_{R r e l T} \cdot Y_{X}$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(3.37)
</span>
</div> 


计算可得，太阳轮a安全系数$S_{F(a)}=3.34$，行星轮c安全系数$σ_{FP(c)}=3.44$，都满足$S_F≥S_{Fmin}=1.25$。
<br/><br/><br/>










## 4 行星齿轮减速机的建模设计
### 4.1 行星齿轮系的三维模型建立

行星齿轮传动中最广用是直齿轮或斜齿轮。斜齿轮优点是齿面接触面积大，力学性能更好，耐用性和抗点蚀性能远胜直齿轮。但考虑到工艺和成本，直齿轮结构简单造价便宜，完全能满足赛车传输动力任务，结合赛事主旨本文设计齿轮均为直齿轮。

①通过专业齿轮软件KISSsoft建立模型。输入齿轮的基本参数，赋予材料属性和润滑方式，如下图4-1所示。此方法速度快，适合简单且标准的齿轮生成，对模型要求不高的情况适用。


       
<div style="display:flex; justify-content:center;">
    <div style="width:100%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-1.1.png"  />
    </div>
</div>
<br/>

<div style="display:flex; justify-content:center;">
    <div style="width:50%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-1.2.png"  />
        <span style="color:#666; font-size: 0.85rem;">图4-1 KISSsoft的行星齿轮级模块 </span>
    </div>
</div>
<br/>


②利用Catia进行参数化设计。建立齿轮基本参数的关系式和渐开线方程式，在创成式设计中创立多个点拟合齿形轮廓后进行封闭填充并进行阵列命令，如下图4-2所示，此方法方便更改齿轮基本参数，不需要从头重新设计。



<div style="display:flex; justify-content:center;">
    <div style="width:90%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-2.1.png"  />
    </div>
</div>
<br/>

<div style="display:flex; justify-content:center;">
    <div style="width:30%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-2.2.png"  />
        <span style="color:#666; font-size: 0.85rem;">图4-2 Catia参数化建模 </span>
    </div>
</div>
<br/>

最终效果如下图4-3所示。


<div style="display:flex; justify-content:center;">
    <div style="width:30%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-3.png"  />
        <span style="color:#666; font-size: 0.85rem;">图4-3 行星齿轮系的三维模型 </span>
    </div>
</div>








#### 4.1.1 行星齿轮传动的均载机构
行星齿轮传动中由于结构上有多个行星轮，形成功率分流传递动力。由于制造和安装误差的情况是不可避免的，同时还需考虑构件的变形等因素，会使行星轮间的载荷分布式不均匀。当某个行星轮上载荷集中时，会限制其他行星轮，如下图4-4所示，传递动力就会失效，导致减速机会产生异常的工况或出现事故。


<div style="display:flex; justify-content:center;">
    <div style="width:70%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-4.png"  />
        <span style="color:#666; font-size: 0.85rem;">图4-4 行星齿轮传动的载荷分布 </span>
    </div>
</div>
<br/>


为了解决行星轮间的载荷分布不均匀情况，可采用各种机械式的均载机构，使其自动调整位置，能有效地降低行星齿轮传动的制造精度，也更容易装配，主要有如下：

①基本构件浮动均载机构：对行星传动中的1个或2个基本构件不进行径向定位支承。当行星轮间的载荷分布不均匀时，允许某个基本构件发生径向移动，实现自动调整位置，使载荷均衡。基本构件可以是中心轮、内齿轮和转臂，只用保证一个及以上基本构件浮动，即可起到均载作用。保证浮动的方法一般是将构件与可移式联轴器，即齿轮联轴器或十字滑块联轴器等连接在一起，如下图4-5所示。



<div style="display:flex; justify-content:space-around;">
    <div style="width:45%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-5.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-5(1) 太阳轮a浮动 </span>
    </div>
    <div style="width:45%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-5.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-5(2) 内齿圈b浮动 </span> 
    </div>
</div>
<br/>



②杠杆联动均载机构：一般设有带偏心的行星轮轴和杠杆系统，在行星轮间的载荷分布不均匀时，杠杆系统会产生联动，使其自动调整位置，使载荷均衡，如下图4-6：

<div style="display:flex; justify-content:space-between;">
    <div style="width:30%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-6.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-6(1) 2个行星轮联动 </span>
    </div>
    <div style="width:32.8%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-6.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-6(2) 3个行星轮联动 </span>
    </div> 
    <div style="width:32%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-6.3.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-6(3) 4个行星轮联动 </span>
    </div> 
</div>
<br/>


③采用弹性件的均载机构：在行星轮间的载荷分布不均匀时，通过弹性件的变形使载荷均衡。常用的弹性件均载有两种，一种是采用具有弹性结构的齿轮均载；另一种是采用弹性支撑均载，比如内齿圈与减速机箱体之间采用弹性套销支承，或使用弹性板簧支承在箱体上，如下图4-7所示。优点在于零件的数量较少，缓震能力很好，缺点是零件的制造精度极高。


<div style="display:flex; justify-content:space-between;">
    <div style="width:30%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-7.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-7(1) 弹性体行星轮 </span>
    </div>
    <div style="width:39.3%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-7.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-7(2) 弹性套销支承 </span>
    </div> 
    <div style="width:26.5%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-7.3.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-7(3) 弹性板簧支承 </span>
    </div> 
</div>
<br/>



④完全刚性构件的均载机构：完全通过构件的高精度，使零件的制造和装配误差很小来保证均载效果。这种方法成本特别高，而且会使行星齿轮传动的制造和装配复杂化，因此基本不采用此均载机构。

本文选取弹性套销的均载机构，保证传动功率能通过所有行星轮进行传递。






#### 4.1.2 太阳轮的结构设计
太阳轮a可设计为齿轮轴，适用于传递转矩较小；也可做成太阳齿轮套，和输入轴花键连接，适用于传递的转矩较大。考虑到赛车需紧急维护检修的情况，设计方案为后者。当太阳轮a不浮动时，应该采取齿轮两端支承，输入侧和输出侧分别采用向心球轴承由转臂x支承，如下图4-8。

<div style="display:flex; justify-content:space-around;">
    <div style="width:30%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-8.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-8(1) 太阳轮a的三维结构 </span>
    </div>
    <div style="width:31%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-8.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-8(2) 太阳轮a的支承结构 </span>
    </div>    
</div>





#### 4.1.3 内齿圈的结构设计
内齿圈b可在圆周方向上与机壳进行连接固定；也可在箱体的内壁上直接切割轮齿；或制成薄壁圆筒结构，增加内齿轮的柔性。本文设计内齿圈b采用弹性支承的均载机构，利用弹性套销将内齿轮连接于减速机箱体上，通过弹性件的变形使各行星轮间载荷分布均匀，如下图4-9所示。

<div style="display:flex; justify-content:space-around;">
    <div style="width:28%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-9.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-9(1) 内齿圈b的三维结构 </span>
    </div>
    <div style="width:33%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-9.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-9(2) 内齿圈b的均载机构 </span>
    </div>    
</div>




#### 4.1.4 行星轮的结构设计
行星轮c需加工内孔，在内孔中通过轴承将行星轮c在转臂x的动轴上，其中对于一般用途的传动机构，多采取滚动轴承作为行星轮的支承。一般情况下，行星轮用两个轴承来支承，如下图4-10所示。行星轮内加工定位轴肩，对轴承的外圈轴向定位，之后分别用弹性挡圈和隔离套环，放在转臂和轴承的内圈之间，对轴承的内圈轴向限位。

<div style="display:flex; justify-content:space-around;">
    <div style="width:28%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-10.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-10(1) 行星轮c的三维结构 </span>
    </div>
    <div style="width:30%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-10.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-10(2) 行星轮c的支承结构 </span>
    </div>    
</div>
<br/>





### 4.2 其他主要零件的三维模型建立
#### 4.2.1 电机输入轴的结构设计
设计渐开线花键输入轴的模数m=1.25mm，齿数z=15，分度圆压力角α=30°。根据《机械设计》知识，由电机传递的转矩初步计算输入轴的最小直径$d_i$：


<div style="position: relative;">
<center> 

$\frac{T}{0.2 \cdot d_{i}^{3}} \leq\left[\tau_{T}\right]$

</center>
<span style="position: absolute; font-size: 0.9rem; top:50%;right:0; transform:translateY(-50%);">
(4.1)
</span>
</div> 



<div class="fuhao_table"></div>

式中： 

|             |                |
|:------------------------------------|:---|     
| [$τ_T$] | 许用扭转切应力（MPa），设计电机输入轴材料为40Cr，取$[τ_T ]=55MPa$ |
| 
| T | 电机转矩（N·mm），$T=80N·m$。 |


代入参数计算可得，输入轴的最小直径$d_i≥19mm$。



根据EMRAX电机供应商提供的二维图纸来设计电机法兰结构，如下图4-11(1)所示。

<div style="display:flex; justify-content:space-around;">
    <div style="width:100%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-11.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-11(1) EMRAX×208电机二维图纸 </span>
    </div>
</div>
<br/>


EMRAX电机带自锁功能，不需防松设计，故电机和法兰之间用螺钉连接即可。中间设计凸台用来定位便于安装，电机法兰与输入轴花键连接，并用弹性挡圈进行轴向固定，这样便于拆装减速机，如下图4-11(2)所示。

<div style="display:flex; justify-content:space-around;">
    <div style="width:37%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-11.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-11(2) 电机法兰和输入轴的装配结构 </span>
    </div>    
</div>
<br/>






#### 4.2.2 转臂输出轴的结构设计
转臂x设计要使其外廓尺寸小，具备足够的强度和刚度，能确保行星轮间载荷分布均匀。转臂x目前最常用的是球墨铸铁QT600-3，成本低，重量轻，噪声小，离心力小。以前常用的ZG55铸钢件废品率高，经济性不好。

转臂x上安装着多个行星轮和轴承，因此结构较复杂，制造和安装精度要求较高。转臂结构如下图4-12(1~3)所示：

①双侧板整体式转臂：一般用在传动比$i_{ax}^b>4$，其刚性较好，获得广泛应用。

<div style="display:flex; justify-content:space-around;">
    <div style="width:35%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-12.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-12(1) 双侧板整体式转臂 </span>
    </div> 
</div>   
<br/>

②双侧板分开式转臂：一般用在传动比$i_{ax}^b<4$，是将一块侧板装配到另一块侧板上，结构较为复杂，但制造工艺比整体式方便多，且便于安装和拆卸。

<div style="display:flex; justify-content:space-around;">
    <div style="width:35%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-12.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-12(2) 双侧板分开式转臂 </span>
    </div>    
</div>
<br/>


③单侧板式转臂：结构简单，但缺点是行星轮为悬臂布置，受力不好。

<div style="display:flex; justify-content:space-around;">
    <div style="width:35%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-12.3.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-12(3) 单侧板式转臂 </span>
    </div>    
</div>
<br/>



本文采用双侧板分开式转臂，两块侧板使用不同毛坯分别制造，通过螺钉将两块侧板螺纹连接，连接板的数量为行星轮轮数。行星销轴的直径设计根据《机械设计》不再赘述。行星销轴穿过另一侧板，用弹性挡圈进行轴向固定，如下图4-13所示。

<div style="display:flex; justify-content:space-around;">
    <div style="width:35%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-13.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-13(1) 双侧板分开式转臂 </span>
    </div>
     <div style="width:32.5%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-13.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-13(2) 双侧板分开式转臂 </span>
    </div>     
</div>
<br/>


为了安装便利，保证输出轴的稳定性，设计行星架与球笼壳为一体，相对于分离式输出轴，简化了球笼壳与行星架的连接，动力直接从转臂传输到球笼壳上，提高传动效率。缺点是结构较为复杂，加工难度较大。

球笼壳内部加工凹槽，装配三枢轴式等速万向节与半轴连接。凹槽处放硅胶垫起到缓震作用，使用弹性挡圈限制万向节的轴向移动。

对于转臂的支承结构，靠近输入侧和输出侧分别都采用两个大小不同的向心球轴承，分别支承在太阳轮a齿轮套上和机壳上，如下图4-14所示。

<div style="display:flex; justify-content:space-around;">
    <div style="width:35%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-14.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-14(1) 转臂的支承结构 </span>
    </div>
     <div style="width:40.5%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-14.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-14(2) 转臂的支承结构 </span>
    </div>     
</div>
<br/>








### 4.3 行星齿轮减速箱的三维模型建立
#### 4.3.1 机壳的结构设计
常见FSEC赛车的减速机壳为两种，一是全包裹型，扭矩从内齿圈传导到箱体再到支架，此方法保护效果更好；二是内齿圈直接由机壳内部加工轮齿，即内齿圈直接连接支架，此方法消除了箱体所受到的扭矩。由于采用弹性件的均载机构，故采用前者。

内齿圈采用弹性件连接的机壳1、靠近输入侧的机壳2和靠近输出侧的机壳3，之间通过紧固件进行螺纹连接，利用弹簧垫圈起摩擦防松作用，如下图4-15所示：

<div style="display:flex; justify-content:space-around;">
    <div style="width:40%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-15.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-15(1) 行星齿轮减速机壳 </span>
    </div>
     <div style="width:35.5%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-15.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-15(2) 行星齿轮减速机壳 </span>
    </div>     
</div>
<br/>

机壳还需装载润滑油，一般润滑的方式有压力润滑法、飞溅润滑法和喷射润滑法等，其中飞溅润滑法通过齿轮传动带动润滑油，将润滑油飞溅到各个需要润滑的部件，不需要多余部件，此方法极大地减轻了减速机的质量体积，因此本文采取飞溅润滑法。

<div style="display:flex; justify-content:space-around;">
    <div style="width:31%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-16.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-16(1) 放油装置 </span>
    </div>
     <div style="width:36%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-16.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-16(2) 通气装置 </span>
    </div>     
</div>
<br/>

齿轮传动传递转矩时润滑油温度增高，机壳内气体压力升高，容易导致油封被破坏。因此需考虑通气装置通气塞，起到平衡内外气压的作用，并可用作进油方式。同时需要橡胶垫片，起到防松和防油作用。






#### 4.3.2 支架和吊耳的结构设计
对于实际工作状况，支架需要承受行星齿轮传动的反向扭矩和减速机自身的重量。为了保证减速机支架具有良好的力学性能和轻量化，选择铝合金材料7075-T6。为了后期拆装维护的便利，设计分离式支架上下两片，通过螺栓与机壳固定，如下图4-17：

<div style="display:flex; justify-content:space-around;">
    <div style="width:30.5%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-17.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-17(1) 减速机支架 </span>
    </div>
     <div style="width:36%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-17.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-17(2) 支架与机壳装配 </span>
    </div>     
</div>
<br/>

吊耳需焊接在车架上，故将吊耳设计为两块，吊耳1与车架焊接，吊耳2分别与吊耳1和机壳支架采用紧固件连接，弹簧垫圈起摩擦防松作用，如下图4-18所示。吊耳2选用和支架一样的铝合金材料7075-T6；因7075-T6会产生热衰退，故吊耳1选用45钢。

<div style="display:flex; justify-content:space-around;">
    <div style="width:30%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-18.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-18(1) 吊耳 </span>
    </div>
     <div style="width:40%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-18.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-18(2) 吊耳与支架装配 </span>
    </div>     
</div>
<br/>

此设计方案极大减少拆装时间，提高赛车拆装效率。
<br/><br/>








### 4.4 标准件的选取
#### 4.4.1 轴承的选取
轴承起到支承机械旋转体，降低零件的摩擦系数，提高耐久度和机械效率。前文已说明采用滚动轴承，选用单列深沟球轴承。查询《机械设计手册》深沟球轴承参数，选用如下表4-1的轴承型号参数，尺寸参数如下图4-19，选取基本额定动载荷值偏大轴承。

<!-- 表注 -->
<div style="display:flex; justify-content:center;">
    <span style="color:#666; font-size: 0.8rem;">表4-1 深沟球轴承型号及参数 </span>
</div>
<br/>

<div class="small_table"></div>

| 轴承位置        | 轴承型号        | 内径$d$  | 外径$D$  | 宽度$B$ | 轴挡肩内径$d_a$ | 轴挡肩外径$D_a$ |
|:-------------|:-------------|:-----------|:-----------|:----------|:-----------------|:----------------|
| 输入侧：<br/>太阳轮-转臂  | `61806`       | `30`        | `42`        | `7`        | <code class="language-text">$32≤d_a≤32.5$</code>   | <code class="language-text">$D_a≤40 $</code>       |
| 输入侧：<br/>转臂-机壳   | `61810`       | `50`        | `65`        | `7`        | <code class="language-text">$52≤d_a$</code>        | <code class="language-text">$D_a≤63 $</code>       |
| 输出侧：<br/>太阳轮-转臂  | `W61705-2RS1` | `25`        | `32`        | `4`        | <code class="language-text">$26.5≤d_a≤27$</code>   | <code class="language-text">$D_a≤31 $</code>       |
| 输出侧：<br/>转臂-机壳   | `61819`       | `95`        | `120`       | `13`       | <code class="language-text">$99.6≤d_a$</cdoe>      | <code class="language-text">$D_a≤115 $</code>      |
| 行星轮-转臂      | `63801`       | `12`        | `21`        | `7`        | <code class="language-text">$13.5$</code>          | <code class="language-text">$D_a≤19.5 $</code>     |


<div style="display:flex; justify-content:space-around;">
    <div style="width:30%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-19.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-19(1) 深沟球轴承剖视图 </span>
    </div>
     <div style="width:34.7%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-19.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-19(2) 深沟球轴承剖视图 </span>
    </div>     
</div>
<br/>


其中，靠近输出侧的太阳轮和转臂之间的轴承，应采用带嵌入式密封的不锈钢深沟球轴承。减速机装载的润滑油不超过三分之一，但如采用普通轴承，通过飞溅润滑法，仍有极少许润滑油会通过太阳轮和转臂之间的轴承溢出来。轴承支承位置如下图4-20：

<div style="display:flex; justify-content:center;">
    <div style="width:50%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-20.png"  />
        <span style="color:#666; font-size: 0.85rem;">图4-20 轴承位置  </span>
    </div>
</div>
<br/>






#### 4.4.2 油封的选取
油封主要作用是将润滑部件与不润滑部件进行隔离。其中动密封指两个耦合件之间存在相对运动的密封装置，静密封则相反。

根据安装密封处部件相应的最高转速，需要考虑金属的导热性等。具体参考《机械设计手册》中根据转速和温度选择油封材料，如下图4-21所示，最终选用油封材料为氟橡胶。

<div style="display:flex; justify-content:center;">
    <div style="width:85%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-21.png"  />
        <span style="color:#666; font-size: 0.85rem;">图4-21 考虑转速及温度的油封材料选择  </span>
    </div>
</div>
<br/>

本文设计输入侧和输出各一个动密封件，输入侧是机壳与太阳轮齿轮套之间，输出侧是机壳与转臂球笼壳之间。按国标GB/T13871-1992进行设计并装配如下图4-22所示：

<div style="display:flex; justify-content:space-around;">
    <div style="width:42%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-22.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-22(1) 油封装配图 </span>
    </div>
     <div style="width:33%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/4-22.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图4-22(2) 油封装配图 </span>
    </div>     
</div>
<br/>







## 5 行星减速机各部件的有限元分析
导入Catia三维模型的源文件后，创建分析系统Analysis Systems中的“静态结构Static Structural”，建立Catia的三维模型与ANSYS软件的连接，如下图5-1所示。

<div style="display:flex; justify-content:space-around;">
    <div style="width:33%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-1.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-1(1) 有限元静力学分析流程 </span>
    </div>
     <div style="width:60%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-1.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-1(2) 软件项目原理图 </span>
    </div>     
</div>
<br/><br/>

定义材料属性参数，为方便赋予材料，“工程数据源Engineering Data Sources”，创建自己的材料库。添加材料参数如材料的密度，如下表5-1和图5-2。

<div style="display:flex; justify-content:center;">
    <span style="color:#666; font-size: 0.8rem;">表5-1 行星减速机各部件的材料属性参数 </span>
</div>
<br/>

| 部件  | 材料        | 杨氏模量<br/>$(GPa)$ | 泊松比    | 密度<br/>$(kg/m^3)$ | 屈服极限<br/>$(MPa)$ |
|:-----|:-----------|:-------------|:--------|:--------------|:-------------|
| 太阳轮 | `20CrMnTi`  | `212`         | `0.289`  | `7860`         | `835`         |
| 行星轮 | `20CrMnTi`  | `212`         | `0.289`  | `7860`         | `835`         |
| 内齿圈 | `40Cr`      | `211`         | `0.277`  | `7870`         | `785`         |
| 行星架 | `QT600-3`   | `169`         | `0.286`  | `7120`         | `370`         |
| 支架  | `7075-T6`   | `72`          | `0.33`   | `2810`         | `505`         |


<div style="display:flex; justify-content:center;">
    <div style="width:100%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-2.png"  />
        <span style="color:#666; font-size: 0.85rem;">图5-2 定义材料库参数  </span>
    </div>
</div>
<br/>

其中弹性模量的大小，对应力结果不影响，但对变形结果影响；而屈服强度的大小，应力和变形结果均不影响；以及泊松比的大小，应力和变形结果都会影响，但变化范围很小。






### 5.1 行星齿轮系的有限元静力学分析
#### 5.1.1 施加约束、载荷及接触
进行前处理需进行第一次默认网格划分，划分网格成功证明部件互不干涉。也可通过Catia中的DMU模块进行检查碰撞功能，检测行星齿轮系间的啮合是否干涉，如下图5-3所示，右侧图片最小值为0，即两者无干涉无间隙，刚好啮合。

<div style="display:flex; justify-content:space-around;">
    <div style="width:38%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-3.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-3(1) 行星齿轮系第一次网格划分 </span>
    </div>
     <div style="width:55.8%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-3.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-3(2) DMU检查碰撞 </span>
    </div>     
</div>
<br/>

对接触面进行定义，将连接Connection中默认接触Contact删除，创建命名选择Named Selection，分别选择各齿轮的齿面和齿根面。接触面定义种类有绑定的Bonded、允许少量无摩擦滑动No Separation、无摩擦的Frictionless、有摩擦的Frictional和粗糙的Rough等。

本选取少量无摩擦滑动No Separation，更符合齿轮在极限工况下的接触形式，如下图5-4所示。

<div style="display:flex; justify-content:center;">
    <div style="width:100%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-4.png"  />
        <span style="color:#666; font-size: 0.85rem;">图5-4 行星齿轮系的定义接触连接  </span>
    </div>
</div>
<br/>

设置接触连接时，需要加密接触部分网格大小。再从求解方案信息Solution Information中查询间隙Gap值，稍微加大在几何修改选项Geometric Modification中的偏移Offset值；或选择界面处理Interface Treatment中的调整接触Adjust to Touch。

设置边界条件，约束目标模型。在连接Connection处添加连接副Connection Group，对太阳轮内花键面添加一个Body-Ground的回转Revolute进行自转；对各个行星轮内圈面分别添加一个Body-Ground的回转Revolute进行自转；对行星轮内圈面添加一个绕太阳轮Body-Body的回转Revolute作为公转；对内齿圈的外表面凹槽处添加Body-Ground的固定fixed约束。

将电机法兰与输入轴考虑为刚性，忽略工况下的微小变形，在太阳轮的内花键处施加逆时针方向140N·m的力矩。同时添加圆柱形支承Cylindrical Support，分别插入到行星轮内圈的安装深沟球轴承处和内齿圈外表面的安装弹性套销处，并允许行星轮进行切向运动，如下图5-5所示。

<div style="display:flex; justify-content:space-around;">
    <div style="width:38%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-5.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-5(1) 太阳轮内花键施加载荷 </span>
    </div>
     <div style="width:42.3%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-5.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-5(2) 定义圆柱形支承 </span>
    </div>     
</div>
<br/>





#### 5.1.2 划分网格
仿真网格类型有机械的Mechanical、非线性机械的Nonlinear Mechanical、和体动力学CFD等，而网络划分的质量好坏会对仿真结果产生很大的影响。为了确保精确性，采取Mechanical网格。

对于单元分类，可分为实体单元、壳单元和杆/梁单元。本文应用实体单元，其可分为六或四面体单元，如下图5-6所示。由于有限元分析软件越来越智能化，四面体单元对于零部件分析是足够的，结果精度和六面体几乎无差距，故采用四面体网格。

<div style="display:flex; justify-content:center;">
    <div style="width:100%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-6.png"  />
        <span style="color:#666; font-size: 0.85rem;">图5-6 有限元分析单元  </span>
    </div>
</div>
<br/>

在网格Mesh中插入方法Method设置为四面体单元Tetrahedrons。添加面尺寸调整resize，将各齿轮接触面网格加密。同时在网格Mesh的尺寸调整Sizing设置中改为Proximity和Curvature，并调整增长率Growth Rate使其网格过渡合理，如下图5-7所示。

<div style="display:flex; justify-content:center;">
    <div style="width:35%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-7.png"  />
        <span style="color:#666; font-size: 0.85rem;">图5-7 行星齿轮系第二次网格划分  </span>
    </div>
</div>
<br/>





#### 5.1.3 行星齿轮系求解云图
日常中齿轮常见的失效形式有点蚀和齿根断裂。齿轮点蚀现象是齿轮长时间工作，会齿面接触疲劳破坏，表面剥落，出现点状小坑。而齿根断裂则是由于设计不规范或超过材料屈服强度，导致的应力集中使其齿根被破坏。

对模型进行求解计算，得到极限工况条件下各齿轮相应云图，如下图5-8至图5-10所示。

<div style="display:flex; justify-content:space-between;">
    <div style="width:31%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-8.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-8(1) 太阳轮位移云图 </span>
    </div>
     <div style="width:31.7%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-8.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-8(2) 太阳轮应力云图 </span>
    </div>     
     <div style="width:30.2%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-8.3.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-8(3) 太阳轮应变云图 </span>
    </div>   
</div>
<br/>

太阳轮在齿面和齿顶的变形量最大，为0.064mm；在齿根处的等效应力最大，为209.83MPa；在齿面处的等效弹性应变最大，为0.001mm。最大应力值远低于材料20CrMnTi的屈服强度，且变形值极小不影响齿轮的正常工作，故太阳轮设计合理。

<div style="display:flex; justify-content:space-between;">
    <div style="width:31%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-9.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-9(1) 行星轮位移云图 </span>
    </div>
     <div style="width:29.8%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-9.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-9(2) 行星轮应力云图 </span>
    </div>     
     <div style="width:31.5%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-9.3.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-9(3) 行星轮应变云图 </span>
    </div>   
</div>
<br/>

行星轮与太阳轮啮合处的齿面变形量最大，为0.05mm；在齿根处的等效应力最大，为219.41MPa；与太阳轮啮合的齿面等效弹性形变最大，为0.001mm。最大应力值远低于材料20CrMnTi屈服强度，且变形值极小不影响齿轮的正常工作，故行星轮设计合理。

<div style="display:flex; justify-content:space-between;">
    <div style="width:31%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-10.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-10(1) 内齿圈位移云图 </span>
    </div>
     <div style="width:31.5%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-10.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-10(2) 内齿圈应力云图 </span>
    </div>     
     <div style="width:32.2%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-10.3.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-10(3) 内齿圈应变云图 </span>
    </div>   
</div>
<br/>

内齿圈在与行星轮啮合处的齿面变形量最大，为0.01mm；在齿根处的等效应力最大，为436.55MPa；在齿根处的等效弹性形变最大，为0.004mm。最大应力值低于材料40Cr的屈服强度，且变形值极小不影响齿轮的正常工作，故内齿圈设计合理。






### 5.2 行星架的有限元静力学分析
#### 5.2.1 划分网格、施加约束和载荷
在赛车弹射起步瞬间是保持静止状态的，电机输出峰值扭矩140N·m，故将行星架的球笼壳面考虑为静止状态。

根据前文（公式3.21）行星轮传递给行星架的扭矩为496.36N·m。将行星架与半轴的接触区域添加固定fixed，在行星架放置深沟球轴承处的轴上施加顺时针方向力矩496.36N·m，如下图5-11所示。

<div style="display:flex; justify-content:space-around;">
    <div style="width:31%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-11.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-11(1) 行星架施加约束和载荷 </span>
    </div>
    <div style="width:32.5%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-11.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-11(2) 行星架施加约束和载荷 </span>
    </div>     
</div>
<br/>

需对行星架上的圆角处加密网格，才能得到较精确的应力值大小。




#### 5.2.2 行星架求解云图
对模型进行求解计算。得到极限工况条件下行星架云图如下图5-12所示。

<div style="display:flex; justify-content:space-around;">
    <div style="width:33.7%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-12.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-12(1) 行星架位移云图 </span>
    </div>
    <div style="width:30%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-12.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-12(2) 行星架应力云图 </span>
    </div>  
    <div style="width:30.5%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-12.3.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-12(3) 行星架应变云图 </span>
    </div>   
</div>
<br/>

行星架在安装轴承的轴最顶端处的变形量最大，为0.055mm；在轴最底端圆角处的等效应力最大，为229.74MPa；在轴最底端圆角处的等效弹性形变最大，为0.0011mm。最大应力值低于材料QT600-3的屈服强度，且变形值极小，故行星架设计合理。






### 5.3 减速机壳支架的拓扑优化
#### 5.3.1 划分网格、施加约束和载荷
行星减速机的上下支架分别与吊耳螺栓连接，故对四个孔进行约束。据前文公式（3.22）对与机壳螺纹连接处施加逆时针方向的总扭矩356.36N·m并进行平分，对上下支架的螺栓和机壳的连接处加密网格，如下图5-13所示。


<div style="display:flex; justify-content:space-between;">
    <div style="width:50%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-13.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-13(1) 对支架施加约束和载荷 </span>
    </div>
    <div style="width:45.5%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-13.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-13(2) 面尺寸调整网格 </span>
    </div>     
</div>




#### 5.3.2 支架求解云图
对模型进行求解计算。得到极限工况条件下行星减速机支架云图，如下图5-14：

<div style="display:flex; justify-content:space-between;">
    <div style="width:33%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-14.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-14(1) 支架位移云图 </span>
    </div>
    <div style="width:32.3%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-14.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-14(2) 支架应力云图 </span>
    </div>  
    <div style="width:32%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-14.3.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-14(3) 支架应变云图 </span>
    </div>   
</div>
<br/>


上下支架与机壳连接处的变形量最大，为0.003mm；同位置等效应力（Von Mises）也最大，为99.5MPa；等效弹性形变也最大，为0.0005mm。可见最大应力值远低于材料7075-T6的屈服强度，且变形值极小，故行星架设计合理。






#### 5.3.3 支架的拓扑优化
创建“拓扑优化Topology Optimization”算例与静态结构关联，设置响应约束Response Constraints保留30%后，求解计算，得到如下图5-15所示。

<div style="display:flex; justify-content:space-between;">
    <div style="width:40%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-15.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-15(1) 建立算例联系 </span>
    </div>
    <div style="width:50%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-15.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-15(2) 拓扑优化后的支架 </span>
    </div>     
</div>


可见软件拓扑优化后整体美观程度不好，同时参考上图5-16的应力云图，对支架多次自己多次修改优化再分析，最终优化模型如下图5-16所示。

<div style="display:flex; justify-content:space-between;">
    <div style="width:33%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-16.1.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-16(1) 支架优化后位移云图 </span>
    </div>
    <div style="width:32.5%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-16.2.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-16(2) 支架优化后应力云图 </span>
    </div>  
    <div style="width:31.5%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/5-16.3.png"  />
        <span style="color:#666; font-size: 0.8rem;">图5-16(3) 支架优化后应变云图 </span>
    </div>   
</div>
<br/>

上下支架与机壳的螺栓连接处变形量最大，为0.02mm；同位置等效应力（Von Mises）最大，为454.5MPa；等效弹性形变也最大，为0.003mm。对比前文可见总变形量、应力和应变都增大许多，但总变形量仍极小，且应力最大值仍低于支架材料7075-T6的屈服强度，故支架最后一次拓扑优化的结构合理，达到了轻量化的目的，在一定程度上减少了整车质量，提高赛车性能。

对于行星齿轮减速机其他零部件的有限元静力学分析和拓扑优化，也同前文进行的行星齿轮系、行星架和减速机支架方法相同，后文不在赘述，最终优化后的装配图和二维工程图纸可参考附录。
<br/><br/>




#### 参考文献
[1]	饶振纲. 行星齿轮传动设计[M]. 北京:化学工业出版社, 2014.

[2]	濮良贵, 陈国定, 吴立言. 机械设计[M]. 北京: 高等教育出版社, 2013.

[3]	孙桓, 陈作模, 葛文杰. 机械原理[M]. 北京: 高等教育出版社, 2013.

[4]	蒋春松, 孙浩. ANSYS有限元分析与工程应用[M]. 北京: 电子工业出版社, 2012.

[5]	闻邦椿. 机械设计手册[M]. 北京: 机械工业出版社,2010.

[6]	余志生. 汽车理论[M]. 北京: 机械工业出版社. 2009.

[7]	寇尊权, 王多. 机械设计课程设计[M]. 吉林: 机械工业出版社. 2006.

[8]	渐开线齿轮行星传动的设计与制造编委会. 渐开线齿轮行星传动的设计与制造[M]. 北京: 机械工业出版社, 2002.

[9]	中国大学生方程式汽车大赛规则[S]. 中国汽车工程学会, 2020.

[10]	郭雷. FSEC赛车传动系统设计与转矩分配策略研究[D]. 辽宁工业大学, 2021.

[11]	韩炜. 某3.5吨电驱动桥行星齿轮减速器齿轮传动系统设计及分析[D]. 武汉理工大学, 2020.

[12]	利仁滨. FSAC赛车驱动系统设计与研究[D]. 广东工业大学, 2020.

[13]	李海鹏. FSEC电动赛车驱动系统及转矩控制策略研究[D]. 福州大学, 2018.

[14]	邓家奇. FSAE纯电动赛车动力匹配及试验研究[D]. 长安大学, 2016.

[15]	李翠翠. NGW行星齿轮减速器三维参数化设计与结构优化[D]. 济南大学, 2016.

[16]	黄奕宏. 行星齿轮传动系统特征频率提取与分析[D]. 华南理工大学, 2015.

[17]	徐彪. 行星齿轮减速器传动装置分析与研究[D]. 长安大学, 2015.

[18]	周飞鲲. 纯电动汽车动力系统参数匹配及整车控制策略研究[D]. 吉林大学, 2013.

[19]	李辉云. 行星齿轮减速器仿真及有限元份研究[D]. 河北工业大学, 2013.

[20]	Liang X H. Dynamics Based Vibration Signal Modeling and Fault Detection of Planetary Gearboxes[D].Edmoton: University of 
Alberta, 2016.

[21]	张倩. 中国大学生方程式汽车大赛与实践教学的研究[J]. 教育教学论坛, 2018(43):28-29.

[22]	贺焕利, 蒲雨. FSEC电动方程式赛车动力系统匹配设计[J]. 汽车实用技术, 2018(24):13-16.

[23]	刘炀, 孙飞扬, 周曼莉. 基于KISSsoft的电动汽车变速箱齿轮修形优化设计[J]. 模具工业, 2018, 44(10):17-20+28.

[24]	张燕. 基于ANSYS的轮边减速器行星齿轮系有限元分析[J]. 安顺学院学报, 2018, 20(05):122-127.

[25]	刘涛, 李浙昆, 李硕, 杨越. 基于ANSYS的减速机齿轮箱结构优化[J]. 农业装备与车辆工程, 2020, 58(09):117-119.

[26]	颜泽荣. 基于ANSYS Workbench的小功率赛车减速箱直齿轮有限元分析[J]. 时代农机, 2016, 43(06):45-47.

[27]	吴先坤, 程义, 柯宝平, 潘岱松. 基于ANSYS Workbench的电机行星齿轮结构设计研究与分析[J]. 客车技术, 2019(05):7-10+16.

<br/>



### 附录

<div style="display:flex; justify-content:center;">
    <div style="width:100%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/-1.png"  />
        <span style="color:#666; font-size: 0.85rem;">图1 EMRAX-208电机技术参数  </span>
    </div>
</div>
<br/>


<div style="display:flex; justify-content:center;">
    <div style="width:100%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/-2.1.png"  />
    </div>
</div>

<div style="display:flex; justify-content:center;">
    <div style="width:100%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/-2.2.png"  />
        <span style="color:#666; font-size: 0.85rem;">图2 减速机三维装配图  </span>
    </div>
</div>
<br/>


<div style="display:flex; justify-content:center;">
    <div style="width:100%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/A0.1.png"  />
        <span style="color:#666; font-size: 0.85rem;">图3 行星齿轮减速机二维装配图  </span>
    </div>
</div>
<br/>


<div style="display:flex; justify-content:center;">
    <div style="width:100%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/A3.1.png"  />
        <span style="color:#666; font-size: 0.85rem;">图4 行星架二维零件图  </span>
    </div>
</div>
<br/>


<div style="display:flex; justify-content:center;">
    <div style="width:100%; text-align:center;">
        <img src="https://macbesu-1254191953.cos.ap-guangzhou.myqcloud.com/zjr-github/JKKKKKK/graduation/A4.1.png"  />
        <span style="color:#666; font-size: 0.85rem;">图5 太阳轮二维零件图  </span>
    </div>
</div>
<br/>
