var dataset = {
    'Lisa Rose': {
        'Lady in the Water': 2.5,
        'Snakes on a Plane': 3.5,
        'Just My Luck': 3.0,
        'Superman Returns': 3.5,
        'You, Me and Dupree': 2.5,
        'The Night Listener': 3.0
    },
    'Gene Seymour': {
        'Lady in the Water': 3.0,
        'Snakes on a Plane': 3.5,
        'Just My Luck': 1.5,
        'Superman Returns': 5.0,
        'The Night Listener': 3.0,
        'You, Me and Dupree': 3.5
    },

    'Michael Phillips': {
        'Lady in the Water': 2.5,
        'Snakes on a Plane': 3.0,
        'Superman Returns': 3.5,
        'The Night Listener': 4.0
    },
    'Claudia Puig': {
        'Snakes on a Plane': 3.5,
        'Just My Luck': 3.0,
        'The Night Listener': 4.5,
        'Superman Returns': 4.0,
        'You, Me and Dupree': 2.5
    },

    'Mick LaSalle': {
        'Lady in the Water': 3.0,
        'Snakes on a Plane': 4.0,
        'Just My Luck': 2.0,
        'Superman Returns': 3.0,
        'The Night Listener': 3.0,
        'You, Me and Dupree': 2.0
    },

    'Jack Matthews': {
        'Lady in the Water': 3.0,
        'Snakes on a Plane': 4.0,
        'The Night Listener': 3.0,
        'Superman Returns': 5.0,
        'You, Me and Dupree': 3.5
    },

    'Toby': {
        'Snakes on a Plane': 4.5,
        'You, Me and Dupree': 1.0,
        'Superman Returns': 4.0
    }
};

var pearson_correlation = function(dataset,p1,p2){
    var existp1p2 = {};
    for(item in dataset[p1]){
                if(item in dataset[p2]){
                    existp1p2[item] = 1
                }
            }
            var num_existence = len(existp1p2);
    if(num_existence ==0) return 0;
    //store the sum and the square sum of both p1 and p2
            //store the product of both
            var p1_sum=0,
                p2_sum=0,
                p1_sq_sum=0,
                p2_sq_sum=0,
                prod_p1p2 = 0;
            //calculate the sum and square sum of each data point
            //and also the product of both point
            for(var item in existp1p2){
                p1_sum += dataset[p1][item];
                p2_sum += dataset[p2][item];
    p1_sq_sum += Math.pow(dataset[p1][item],2);
                p2_sq_sum += Math.pow(dataset[p2][item],2);
    prod_p1p2 += dataset[p1][item]*dataset[p2][item];
            }
            var numerator =prod_p1p2 - (p1_sum*p2_sum/num_existence);
    var st1 = p1_sq_sum - Math.pow(p1_sum,2)/num_existence;
            var st2 = p2_sq_sum -Math.pow(p2_sum,2)/num_existence;
    var denominator = Math.sqrt(st1*st2);
    if(denominator ==0) return 0;
            else {
                var val = numerator / denominator;
                return val;
            }
            
    }