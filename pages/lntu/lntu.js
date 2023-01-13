// pages/Second/Second.js
var random1 = Math.floor(Math.random() * 52);
var random2 = Math.floor(Math.random() * 40);
var random3 = Math.floor(Math.random() * 75);
var random4 = Math.floor(Math.random() * 80);
var random5 = Math.floor(Math.random() * 41);
var random6 = Math.floor(Math.random() * 39);
var context1 = ["壹丰烧仙草 \r\n￥15", "珍珠螺蛳粉奶茶\r\n中￥11 大￥13", "波霸珍珠奶茶\r\n中￥10 大￥12", "波霸蛋糕奶茶\r\n中￥12 大￥14", "波霸黑糖奶茶\r\n中￥11 大￥13", "京都御抹\r\n中￥10 大￥12", "焦糖布丁奶茶\r\n中￥10 大￥12", "椰果奶茶\r\n中￥10 大￥12", "黑糖螺蛳粉奶茶\r\n中￥12 大￥14", "壹丰奶茶\r\n中￥9大 ￥11",'生打椰嗦嗦乐\r\n中￥10 大￥13','生打椰椰抹茶\r\n中￥10 大￥13','生打椰芒芒\r\n中￥13 大￥16','草莓波波茶\r\n中￥9 大￥12','奥利奥布蕾\r\n中￥12 大￥15','红果嗦嗦粉\r\n￥15','新杨枝甘露\r\n￥16','草莓茶乐冻\r\n￥14','葡萄爆柠\r\n中￥13' ,'鲜橙芒芒\r\n￥14','鲜百香螺蛳粉\r\n￥15','奶绿螺蛳粉\r\n￥10','鲜芒果螺蛳粉\r\n￥15','火龙果螺蛳粉\r\n￥15','鲜葡萄果咖\r\n￥14','鲜百香芒芒\r\n￥15','寒天拿铁咖啡\r\n￥15','鲜芒柠檬绿\r\n￥14','柠檬水\r\n￥8','葡萄啵啵冻\r\n￥13','满杯奇异果\r\n￥13','鲜金桔柠檬汁\r\n￥12','满杯橙橙\r\n￥13','满杯百香果\r\n￥13','霸气草莓果粒\r\n￥13','鲜百香双响炮\r\n￥14','鲜芒柠檬绿\r\n￥14','美式黑咖\r\n￥9','黑糖拿铁咖啡\r\n￥13','生打椰拿铁\r\n￥13','鸳鸯咖啡\r\n￥13','蓝椰嗦嗦乐\r\n￥13','蓝椰多肉蛋糕\r\n￥15','一桶大满贯奶茶\r\n￥17','一桶柠檬水\r\n￥13','一桶绿宝石\r\n￥17','一桶少女心\r\n￥17','芒果益菌多\r\n中￥12 大￥15','柠檬益菌多\r\n中￥10 大￥13','奇异果益菌多\r\n中￥12 大￥15','草莓酸奶\r\n￥12','多肉葡萄酸奶\r\n￥12'];
var context2 = ["蜜桃四季春\r\n￥7", "奥利奥雪王大圣代\r\n￥7", "满杯百香果\r\n￥8", "冰鲜柠檬水\r\n￥5", "雪梨银耳椰椰\r\n￥10", "桑葚全家桶（3杯）", "天天向上套餐（2杯）", "雪梨银耳\r\n￥8", "芝士奶盖四季春\r\n￥11", "桑葚莓莓\r\n￥8",'桑葚雪王大圣代\r\n￥7','棒打鲜橙\r\n￥7','港式杨枝甘露\r\n￥11','鲜橙益菌多\r\n￥9','黄桃果霸\r\n￥7','荔枝啵啵\r\n￥8','荔枝椰椰\r\n￥8','霸霸红豆奶茶\r\n￥9','三拼霸霸奶茶\r\n￥9','霸霸珍珠奶茶\r\n￥9','霸霸双拼奶茶\r\n￥9','霸霸椰果奶茶\r\n￥9','珍珠奶茶\r\n￥7','黑糖珍珠奶茶\r\n￥8','双拼奶茶\r\n￥8','芒果雪王大圣代\r\n￥7','黑糖珍珠大圣代\r\n￥7','摩卡摇摇奶昔\r\n￥7','草莓摇摇奶昔\r\n￥7','桃桃摇摇奶昔\r\n￥7','草莓雪王大圣代\r\n￥7','雪王雪顶咖啡\r\n￥7','拿铁咖啡\r\n￥7','美式咖啡\r\n￥5','芝芝桑葚\r\n￥10','芝士奶盖绿茶\r\n￥11','芝士奶盖红茶\r\n￥11','伯爵红茶\r\n￥5','茉莉绿茶\r\n￥5','高山四季春茶\r\n￥5'];
var context3 = ["巧克力奥利奥奶茶\r\n￥11", "芋泥小芋圆奶绿\r\n￥12", "芋泥大满贯\r\n￥13", "水桶奶茶（桶）\r\n￥10", "招牌烤奶\r\n￥7", "招牌珍珠奶茶\r\n￥7", "椰果奶茶\r\n￥7", "珍珠奶绿\r\n￥7", "椰果奶绿\r\n￥7", "小芋圆奶茶\r\n￥8",'红豆布丁奶茶\r\n￥8','焦糖奶茶\r\n￥10','芋泥芒椰波波\r\n￥12','大满贯奶茶\r\n￥13','烤奶奶茶\r\n￥10' ,'香芋啵啵奶茶\r\n￥10','草莓啵啵奶茶\r\n￥10','抹茶奶绿\r\n￥10','热牛奶/冰牛奶\r\n￥5.8','草莓养乐多\r\n￥14','橙意满满（大桶茶）\r\n￥11','超级水果茶（桶）\r\n￥11','葡萄爆柠冻冻茶\r\n￥10' ,'冰摇山楂果奶\r\n￥12','青提柠檬茶\r\n￥10','逢考必过\r\n￥12','青提芦荟\r\n￥10','西柚恋桃桃\r\n￥10','香柠芦荟冰茶\r\n￥8','杨枝甘露（罐）\r\n￥15','鲜榨芒果汁\r\n￥15','草莓番石榴\r\n￥8','草莓抱抱杯\r\n￥12','冰鲜柠檬水\r\n￥6','柠檬绿茶\r\n￥5','冻柠茶\r\n￥7','茉莉绿茶\r\n￥5','桃桃草莓抱抱杯\r\n￥12','百香果双响炮\r\n￥10','柠檬百香果\r\n￥10','玫瑰蜜桃\r\n￥10','一杯毒药\r\n￥10','一杯解药','蜜桃益菌多\r\n￥11','草莓益菌多\r\n￥11','香柠益菌多\r\n￥12','柠檬百香果益菌多\r\n￥13','青提益菌多\r\n￥9','栀香桃桃草莓\r\n￥12','甜橙益菌多\r\n￥11','西柚汁\r\n￥10','鲜西瓜冰沙\r\n￥10','柠檬冰沙\r\n￥10','多肉山楂莓莓\r\n￥12','青苹果乐乐冰\r\n￥12','蓝莓优乐冰\r\n￥12','芒果冰沙\r\n￥13','玫珑瓜芝芝\r\n￥15','桃桃莓莓芝芝\r\n￥15','多肉葡萄（罐）\r\n￥15','玫瑰葡萄芝芝\r\n￥15','乳酸菌气泡水\r\n￥12','青苹果气泡水\r\n￥10','青柠气泡水（罐）\r\n￥10','西柚蜜桃气泡水（罐）\r\n￥12','葡萄气泡水（罐）\r\n￥12','葡萄厚切（炒酸奶）\r\n￥15' ,' 朗姆酒葡萄（炒酸奶）\r\n￥15','提拉米苏（炒酸奶）\r\n￥15','蓝莓厚切（炒酸奶）\r\n￥15','网红椰子灰（炒酸奶）\r\n￥15','榛子巧克力（炒酸奶）\r\n￥15','芒果厚切（炒酸奶）\r\n￥15','抹茶奥利奥（炒酸奶）\r\n￥15','草莓厚切（炒酸奶）\r\n￥15'];
var context4 = ["原味奶茶\r\n￥6", "珍珠奶茶\r\n￥7", "烤奶奶茶\r\n￥7", "奥利奥奶茶\r\n￥7", "招牌双拼奶茶\r\n￥8", "椰果奶茶\r\n￥7", "红豆奶茶\r\n￥7", "仙草奶茶\r\n￥7", "布丁奶茶\r\n￥7", "芋泥啵啵奶茶\r\n￥12",'大满贯奶茶\r\n￥10','巧克力原浆\r\n￥7','黑糖无花果奶茶（热饮）\r\n￥7','黑糖姜丝奶茶（热饮）\r\n￥7','奥氏曲奇\r\n￥10','茉莉奶绿\r\n￥7','香蕉牛奶\r\n￥7','桂圆红枣奶茶\r\n￥7','玫瑰奶茶\r\n￥8','宇志抹茶\r\n￥8','抹茶椰奶\r\n￥8','麦香椰奶\r\n￥8','茉香雪梨\r\n￥8','香蕉牛奶\r\n￥7','燕麦牛奶（热饮）\r\n￥7','抹茶迷彩杯\r\n￥10','熊猫果茶\r\n￥12','柚见鲜橙\r\n￥7','清凉蜜桃茶\r\n￥7','百香果双响炮\r\n￥7','蜜桃芒芒\r\n￥8','爱上芒果风\r\n￥8','一颗柠檬果茶\r\n￥15','蜜桃石榴密\r\n￥8','荔枝芭乐\r\n￥8','百香果养乐多\r\n￥8','鲜橙益菌多\r\n￥7','百香益菌多\r\n￥7','小麦草茵茵（摇一摇）\r\n￥12','桑葚益菌多（摇一摇）\r\n￥12','招牌珍珠原味奶盖\r\n￥15' ,'抹茶珍珠奶盖茶\r\n￥16','抹茶红茶奶盖茶\r\n￥15','抹茶奶盖绿茶\r\n￥15','原为红茶奶盖茶\r\n￥14','熊猫奶盖\r\n￥15','黑糖乌龙奶盖茶\r\n￥15','招牌珍珠奶盖茶（红茶）\r\n￥15','招牌珍珠奶盖茶（绿茶）\r\n￥15','芒果欧蕾奶盖茶\r\n￥14','白桃乌龙爱玉奶盖茶\r\n￥15','热可可（热饮）\r\n￥8','榛果巧克力（热）\r\n￥8','拿铁咖啡\r\n￥8','卡布奇诺咖啡\r\n￥8','冰可可布丁（凉）\r\n￥9','雪顶咖啡\r\n￥10','一品青提\r\n￥7','紫色诱惑\r\n￥5','初恋味道\r\n￥5','酸梅汤\r\n￥5','翡翠柠檬菠萝冻\r\n￥8','青橘鲜柠\r\n￥8','蓝莓蔓越莓\r\n￥7' ,'芒果雪泡\r\n￥7','草莓雪泡\r\n￥7','水蜜桃雪泡\r\n￥7','无酒精莫吉托\r\n￥8','柠檬VC泡泡\r\n￥7','樱花气泡\r\n￥8','金桔柠檬泡泡\r\n￥8','西柚气泡\r\n￥8','蓝柑气泡\r\n￥8','奥利奥旋风\r\n￥10','抹茶奶昔\r\n￥8','菠萝奶昔\r\n￥8','黄桃奶昔\r\n￥8','芒果奶昔\r\n￥8','芒果冰沙\r\n￥7','黄桃冰沙\r\n￥7'];
var context5 = ["芋泥小丸子奶绿\r\n￥9", "芋泥小丸子乌龙\r\n￥9", "芋泥啵啵奶茶\r\n￥9", "红豆奶茶\r\n￥8", "奥利奥奶茶\r\n￥8", "小金砖奶茶\r\n￥8", "一桶全家福\r\n￥11", "wu敌全套奶茶\r\n￥9", "黑糖珍珠奶茶\r\n￥8", "杨枝甘露\r\n￥13",'芝芝蜜桃\r\n￥13','茉莉蜜桃\r\n￥11','多肉葡萄\r\n￥12','芝芝葡萄\r\n￥14','百香金苹果\r\n￥9','草莓酸奶摇摇茶\r\n￥8','桃桃酸奶摇摇茶\r\n￥8','四季果园9','桃桃柠檬茶\r\n￥7','水蜜桃晶球\r\n￥8','葡萄晶球\r\n￥8','多肉杨梅\r\n￥7','百香果大满贯\r\n￥9','一桶水果茶\r\n￥11','熊黑蛋暴打鸭屎香\r\n￥9','熊黑蛋生打西瓜椰\r\n￥10','生椰拿铁\r\n￥11','只是芒果\r\n￥6','晶风玉露\r\n￥6','柠檬益菌多\r\n￥8','冰鲜柠檬水\r\n￥5','卡布奇诺\r\n￥7','茉莉绿茶\r\n￥5','四季春茶\r\n￥5','奥利奥圣代\r\n￥7','巧克力圣代\r\n￥7','草莓圣代\r\n￥7','黑糖波波圣代\r\n￥7','雪顶咖啡\r\n￥9','茉莉雪顶\r\n￥7','四季春雪顶\r\n￥7'];
var context6 =["热牛奶/冰牛奶\r\n￥6","芒果西米露\r\n￥9",'伯爵奶茶\r\n￥6','柠檬绿茶\r\n￥6','奥利奥珍珠奶茶\r\n￥8','招牌满杯烧仙草\r\n￥10','草莓奶昔\r\n￥8','巧克力奶昔\r\n￥8','双拼奶绿\r\n￥8','招牌牛乳奶茶\r\n￥8','草莓脏脏奶茶\r\n￥9','芒果脏脏\r\n￥9','经典奶茶\r\n￥6','脏脏奶茶\r\n￥9','九珍果汁❤\r\n￥8','黑糖珍珠\r\n￥8','奶茶三兄弟\r\n￥9','珍珠奶茶\r\n￥7' ,'茉香奶绿\r\n￥6','西米奶绿\r\n￥7','玫瑰奶茶\r\n￥6','布丁牛奶奶茶\r\n￥7','柠檬养乐多\r\n￥9','满杯鲜橙多\r\n￥7','鲜百香果双响炮\r\n￥10','酸梅汤\r\n￥5','草莓番石榴\r\n￥7','芒果百乐冰\r\n￥8','水蜜桃百乐冰\r\n￥8','百香果百乐冰\r\n￥9','可可大满贯\r\n￥11','芒果奶昔\r\n￥8','水蜜桃奶昔\r\n￥8','抹茶奶昔\r\n￥8','奥利奥奶昔\r\n￥8','黑金拿铁\r\n￥8','抹茶拿铁\r\n￥7','香浓巧克力\r\n￥7','红豆抹茶拿铁\r\n￥8']
var app = getApp()
var Paths = ['再来一次？','一食堂闹闹快餐','一食堂啵啵鱼', '一食堂叫了个鸡', '一食堂烤鸭饭', '一食堂摩尔汉堡', '二食堂骨汤蒸饺','二食堂淮南牛肉汤','二食堂辫椒工坊','二食堂安徽牛肉板面','二食堂渔小鱼无骨烤鱼','二食堂麻辣香锅','二食堂石锅拌饭','二食堂兰州拉面','二食堂掉渣饼','二食堂面试e族','二食堂QQ快餐','二食堂河南烩面','一食堂波姨土豆粉','一食堂梁师傅串炒饭','一食堂4+1冒菜','一食堂铁板饭手撕鸡架','二食堂呼饼盖饭','一食堂一禾饭团','一食堂真筋道私房牛肉面','二食堂香酥煎饼','一食堂西安美食','一食堂千里香混沌','一食堂隔壁老张的面','一食堂杭州小笼包','二食堂妙味烤肉脆皮鸡盖饭','一食堂三个叔叔的炸鸡','一食堂好劲道大骨头汤面','一食堂红油凉皮','二食堂韩式紫菜包饭','二食堂尊尊瓦香鸡','一食堂0090炸鸡汉堡','一食堂小二哥川菜','二食堂灌汤饭🍚','二食堂老妈烫饭','海参炒面🥡','二食堂王婆大肉滑','二食堂强子特色美食','二食堂拌饭专家','一食堂猫婆小面','木槿源拌饭.汤饭','二食堂南京鸭血粉丝汤','二食堂高小姐的面','二食堂黄焖鸡米饭','二食堂螺蛳粉','二食堂瓦罐米粉','二食堂真牛馅饼羊汤','一食堂盐烤香扒','二食堂香扒饭','二食堂重庆小面','隔壁老王（汉堡）','干锅煎肉饭','二食堂好滋味羊杂面','特色煎饼果子🥡','荷叶炒饭🥡','一食堂东北人家','干锅饭拌鸡腿搬拌鸡架🥡','竹筒煎肉饭']; 
var all= ['再来一次？','一食堂闹闹快餐','一食堂啵啵鱼', '一食堂叫了个鸡', '一食堂烤鸭饭', '一食堂摩尔汉堡', '二食堂骨汤蒸饺','二食堂淮南牛肉汤','二食堂辫椒工坊','二食堂安徽牛肉板面','二食堂渔小鱼无骨烤鱼','二食堂麻辣香锅','二食堂石锅拌饭','二食堂兰州拉面','二食堂掉渣饼','二食堂面试e族','二食堂QQ快餐','二食堂河南烩面','一食堂波姨土豆粉','一食堂梁师傅串炒饭','一食堂4+1冒菜','一食堂铁板饭手撕鸡架','二食堂呼饼盖饭','一食堂一禾饭团','一食堂真筋道私房牛肉面','二食堂香酥煎饼','一食堂西安美食','一食堂千里香混沌','一食堂隔壁老张的面','一食堂杭州小笼包','二食堂妙味烤肉脆皮鸡盖饭','一食堂三个叔叔的炸鸡','一食堂好劲道大骨头汤面','一食堂红油凉皮','二食堂韩式紫菜包饭','二食堂尊尊瓦香鸡','一食堂0090炸鸡汉堡','一食堂小二哥川菜','二食堂灌汤饭🍚','二食堂老妈烫饭','海参炒面🥡','二食堂王婆大肉滑','二食堂强子特色美食','二食堂拌饭专家','一食堂猫婆小面','木槿源拌饭.汤饭','二食堂南京鸭血粉丝汤','二食堂高小姐的面','二食堂黄焖鸡米饭','二食堂螺蛳粉','二食堂瓦罐米粉','二食堂真牛馅饼羊汤','一食堂盐烤香扒','二食堂香扒饭','二食堂重庆小面','隔壁老王（汉堡）','干锅煎肉饭','二食堂好滋味羊杂面','特色煎饼果子🥡','荷叶炒饭🥡','一食堂东北人家','干锅饭拌鸡腿搬拌鸡架🥡','竹筒煎肉饭']; 
var dinone=['再来一次？','一食堂闹闹快餐','一食堂啵啵鱼', '一食堂叫了个鸡', '一食堂烤鸭饭', '一食堂摩尔汉堡','一食堂波姨土豆粉','一食堂梁师傅串炒饭','一食堂4+1冒菜','一食堂铁板饭手撕鸡架','一食堂一禾饭团','一食堂真筋道私房牛肉面','一食堂西安美食','一食堂千里香混沌','一食堂隔壁老张的面','一食堂杭州小笼包','一食堂三个叔叔的炸鸡','一食堂好劲道大骨头汤面','一食堂红油凉皮','一食堂0090炸鸡汉堡','一食堂小二哥川菜','一食堂猫婆小面','一食堂盐烤香扒','隔壁老王（汉堡）','一食堂东北人家','干锅饭拌鸡腿搬拌鸡架',] 
var dintwo=['再来一次？','二食堂骨汤蒸饺','二食堂淮南牛肉汤','二食堂辫椒工坊','二食堂安徽牛肉板面','二食堂渔小鱼无骨烤鱼','二食堂麻辣香锅','二食堂石锅拌饭','二食堂兰州拉面','二食堂掉渣饼','二食堂面试e族','二食堂QQ快餐','二食堂河南烩面','二食堂呼饼盖饭','二食堂香酥煎饼','二食堂妙味烤肉脆皮鸡盖饭','二食堂韩式紫菜包饭','二食堂尊尊瓦香鸡','二食堂灌汤饭','二食堂老妈烫饭','一食堂猫婆小面','二食堂南京鸭血粉丝汤','二食堂高小姐的面','二食堂黄焖鸡米饭','二食堂螺蛳粉','二食堂瓦罐米粉','二食堂真牛馅饼羊汤','二食堂香扒饭','二食堂重庆小面','二食堂好滋味羊杂面','特色煎饼果子','二食堂竹筒煎肉饭','山东大煎饼']; 
var takeway=['再来一次？','一食堂闹闹快餐','一食堂啵啵鱼', '一食堂叫了个鸡', '一食堂烤鸭饭', '一食堂摩尔汉堡','二食堂淮南牛肉汤','二食堂辫椒工坊','二食堂安徽牛肉板面','二食堂渔小鱼无骨烤鱼','二食堂麻辣香锅','二食堂石锅拌饭','二食堂兰州拉面','二食堂掉渣饼','二食堂面试e族','二食堂QQ快餐','二食堂河南烩面','一食堂波姨土豆粉','一食堂梁师傅串炒饭','一食堂4+1冒菜','一食堂铁板饭手撕鸡架','二食堂呼饼盖饭','一食堂一禾饭团','一食堂真筋道私房牛肉面','二食堂香酥煎饼','一食堂西安美食','一食堂千里香混沌','一食堂隔壁老张的面','一食堂杭州小笼包','二食堂妙味烤肉脆皮鸡盖饭','一食堂三个叔叔的炸鸡','一食堂好劲道大骨头汤面','一食堂红油凉皮','二食堂韩式紫菜包饭','二食堂尊尊瓦香鸡','一食堂0090炸鸡汉堡','一食堂小二哥川菜','二食堂灌汤饭','二食堂老妈烫饭','海参炒面','二食堂王婆大肉滑','二食堂强子特色美食','二食堂拌饭专家','一食堂猫婆小面','木槿源拌饭.汤饭','二食堂南京鸭血粉丝汤','二食堂高小姐的面','二食堂黄焖鸡米饭','二食堂螺蛳粉','二食堂瓦罐米粉','二食堂真牛馅饼羊汤','一食堂盐烤香扒','二食堂香扒饭','二食堂重庆小面','隔壁老王（汉堡）','干锅煎肉饭','二食堂好滋味羊杂面','特色煎饼果子','荷叶炒饭','一食堂东北人家','干锅饭拌鸡腿搬拌鸡架','竹筒煎肉饭','姜记虾滑','闹着玩黄焖鸡','鱼情未了无骨烤鱼饭','正宗南京小笼包','芝士厨房','扒饭','贺姐脆皮炸鸡','下课来哟','猪小二酱骨饭',]
var Index = 0;  //初试默认为0
var a=62;
Page({
  /** 
    * 页面的初始数据 
  */  
 data: {  
   Path:Paths[0],  
   title:'开始抽选',      //设按钮文字为Start
   isRunning:false,  
   userInfo:{}, 
   diname:"全部",
   timeList: [{        //时间数组
    title: "距离午餐",
    endTime: "2099-12-31 11:30:00",
  }, {
    title: "距离晚餐",
    endTime: "2099-12-31 17:00:00",
  }, ],
   },  


   change:function(e){
      Index++;  
      if (Index>a){   
         Index=0;   
       }  
    this.setData( {   
         Path:Paths[Index]   
            }
            )  
        },  
     guess:function(e){   
      let isRunning = this.data.isRunning;  
      if(!isRunning){     
       this.setData( {        
         title:'点击停止',      //按钮上的字变为Stop
          isRunning:true    
           } );    
        this.timer=setInterval((function(){
            this.change()    
           }).bind(this),50 ); //名字滚动的频率
         }   
         else{ this.setData(    
             {       
                title:'再来一次',              //按钮上的字变为StART
                isRunning:false   
               } 
               );     
         this.timer&&clearInterval(this.timer);    
        } 
      }
    ,

      onShareAppMessage: function () {
        return {
         title:"LNTUer都用疯了!我今天决定吃"+this.data.Path+"了"
        }
      },
      onShareTimeline: function(res){
        return {
          title:"LNTUer都用疯了!我今天决定吃"+this.data.Path+"了,你也来试试吧"
        }
      },
      onPageScroll:function(){
      
      },


  //时间显示小于10的前面补0方法
  timeFormat(param) {
    return param < 10 ? '0' + param : param;
  },
  //多个倒计时函数
  severalCountDown: function () {
    var that = this;
    var time = 0;
    var obj = {};
    var timeList = that.data.timeList;
    //遍历数组，计算每个item的倒计时秒数
    timeList.forEach(function (item) {
      var endTime = new Date(item.endTime.replace(/-/g, "/")).getTime();//结束时间时间戳
      var currentTime = new Date().getTime();//当前时间时间戳
      time = (endTime - currentTime) / 1000;
      // 如果活动未结束
      if (time > 0) {
        var hou = parseInt(time / (60 * 60) % 24);
        var min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
        var sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
        obj = {
          hou: that.timeFormat(hou),
          min: that.timeFormat(min),
          sec: that.timeFormat(sec)
        }
      } else { //活动已结束
        obj = {
          hou: "00",
          min: "00",
          sec: "00"
        }
        clearTimeout(that.data.timeIntervalSeveral); //清除定时器
      }
      item.time = obj;
    })
    var timeIntervalSeveral = setTimeout(that.severalCountDown, 1000);
    that.setData({
      timeIntervalSeveral,
      timeList,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.severalCountDown();//多个定时器
  },
//奶茶
  naicha1(){
    wx.showModal({
        title: '壹丰茶饮',
        content: context1[random1],
        success: function (res) {
            if (res.confirm) {  
              random1 = Math.floor(Math.random() * 52);
              console.log('用户点击确定')
            }else{
            console.log('用户点击取消')
            }       
        },
    })
  },
  naicha2(){
    wx.showModal({
        title: '蜜雪冰城',
        content: context2[random2],
        success: function (res) {
            if (res.confirm) {  
              random2 = Math.floor(Math.random() * 40);
              console.log('用户点击确定')
            }else{
            console.log('用户点击取消')
            }       
        },
    })
  },
  naicha3(){
    wx.showModal({
        title: '飞扬炽茶',
        content: context3[random3],
        success: function (res) {
            if (res.confirm) {  
              random3 = Math.floor(Math.random() * 75);
              console.log('用户点击确定')
            }else{
            console.log('用户点击取消')
            }       
        },
    })
  },
  naicha4(){
    wx.showModal({
        title: '7果贡茶',
        content: context4[random4],
        success: function (res) {
            if (res.confirm) {  
              random4 = Math.floor(Math.random() * 80);
              console.log('用户点击确定')
            }else{
            console.log('用户点击取消')
            }       
        },
    })
  },
  naicha5(){
    wx.showModal({
        title: '甜拉拉',
        content: context5[random5],
        success: function (res) {
            if (res.confirm) {  
              random5 = Math.floor(Math.random() * 41);
              console.log('用户点击确定')
            }else{
            console.log('用户点击取消')
            }       
        },
    })
  },
  naicha6(){
    wx.showModal({
        title: '茶鲜生',
        content: context6[random6],
        success: function (res) {
            if (res.confirm) {  
              random6 = Math.floor(Math.random() * 39);
              console.log('用户点击确定')
            }else{
            console.log('用户点击取消')
            }       
        },
    })
  },
  useful(){
    wx.showModal({
        title: '如何使用',
        content: '奶茶抽选：用户点击“确定”将刷新结果，再次点击店铺名称将进行随机抽选。\r\n用户点击“取消”将保留该结果，下次点击时结果仍为该结果，不会进行随机抽选。',
        success: function (res) {
            if (res.confirm) {  
              console.log('用户点击确定')
            }else{
            console.log('用户点击取消')
            }       
        },
    })
  },

//广告
  adLoad() {
    console.log('Banner 广告加载成功')
  },
  adError(err) {
    console.log('Banner 广告加载失败', err)
  },
  adClose() {
    console.log('Banner 广告关闭')
  },

  //changedining
  handleShowAction() {
    wx.showActionSheet({
      itemList: ['全部','一食堂','二食堂','支持外卖'], //文字数组
      itemColor: 'red', //文字颜色
      success: (res) => {
        switch(res.tapIndex) {
           case 0:
            console.log('用户点击了全部')
            a=62
            Paths=all
            this.setData({
              diname:"全部"
            })
            break;
          case 1:
            console.log('用户点击了一食堂')
            a=25;
            Paths=dinone
            this.setData({
              diname:"一食堂"
            })
            break;	
            case 2:
              console.log('用户点击了二食堂')
            a=31;
            Paths=dintwo
            this.setData({
            diname:"二食堂"
            })
            break;
            case 3:
              console.log('用户点击了外卖')
            a=61;
            Paths=takeway
            this.setData({
            diname:"支持外卖"
            })
            break;
        }
      }
    })
  }

    })

