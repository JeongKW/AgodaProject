CREATE VIEW resi_rating_score
	AS
  	 SELECT res_code,
         	 ROUND(
               view_num
             / (SELECT sum(view_num) FROM residence)
             * 100
             / ((SELECT max(A.rating_score)
                   FROM (SELECT res_code,
                                  view_num
                                / (SELECT sum(view_num) FROM residence)
                                * 100
                                   AS rating_score
                           FROM residence) A))
             * 10,
             1)
             AS rating_score
	FROM residence;
CREATE VIEW board_bbsseq_desc
	AS
     SELECT bbs_seq AS bbsSeq,
            title,
            content,
            id,
            DATE_FORMAT(NOW(), "%Y-%m-%d") AS regdate,
            view_count AS viewCount
       FROM board
   		ORDER BY bbsSeq DESC;